import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ImageBackground } from 'react-native';
import {styles} from "./styles";
import {vibrate} from '../utils';
import Cronometro from './Cronometro';


class CronometroPomodoro extends React.Component {
    constructor(props) {
        super(props),
        this.state = {
          currentTime: "25:00",
          tTrabajo: "25:00",
          tDescanso: "05:00",
          isRunning: true,
          timer: null,
          paused: false,
          playing: false,
        }
       
        this.setTTrabajo = this.setTTrabajo.bind(this);
        this.setTDescanso = this.setTDescanso.bind(this);
        this.iniciar = this.iniciar.bind(this);
        this.pausar = this.pausar.bind(this);
        this.reiniciar = this.reiniciar.bind(this);
        this.decrementar = this.decrementar.bind(this);
        this.cambiarEstado = this.cambiarEstado.bind(this);
      }
    
      // Setea los nuevos valores ingresados en el TextInput
      setTTrabajo(val) {
        let tNuevo = getTiempo(val);
        this.setState({
          tTrabajo: tNuevo,
        });
        if (!this.state.timer) {
          this.setState({
            currentTime: tNuevo,
          });
        }      
      }
    
      setTDescanso(val) {
        let tNuevo = getTiempo(val);
        this.setState({
          tDescanso: tNuevo,
        });
      }
    
       iniciar() {
        if (this.state.paused === true || this.state.playing === false) { 
          this.setState({
            timer: setInterval(this.decrementar, 1000),
            paused: false,
            playing: true,
          });
        }
      }
    
      pausar () {
        if (this.state.paused === false && this.state.playing === true) {
          clearInterval(this.state.timer);
          this.setState({
            paused: true,
            timer: null,
            playing: false
          });
        } else if (this.state.paused === true && this.state.playing === false) {
          this.iniciar();
        }       
      }
    
      reiniciar () {
        this.pausar();
        this.setState({
          currentTime: this.state.tTrabajo,
          playing: false,
          paused: false,
          isRunning: true,
          timer: null
        })
      }

       
      decrementar() {
        //Comprueba si el contador esta en 0
        if (this.state.currentTime === "00:00" && this.state.playing === true) {   
          vibrate();
          this.cambiarEstado();
        } else {
          //Slice se encarga de "partir" currentTime, para asi separarlo en segundos y minutos
          let seg = this.state.currentTime.slice(3);
          let min = this.state.currentTime.slice(0, 2);
          if (seg === "00") {
            let newMin = leftPadding(parseInt(min) - 1);
            let tNuevo = newMin + ":59";
            this.setState({
              currentTime: tNuevo,
            });
          } else {
            let newSeg = leftPadding((parseInt(seg) - 1));
            let tNuevo = min + ":" + newSeg;
            this.setState({
              currentTime: tNuevo,
            })
          }
        }
      }
      //Alterna el tiempo de trabajo y descanso
      cambiarEstado() {
        if (this.state.isRunning) {
          this.setState({
            isRunning: false,
            currentTime: this.state.tDescanso,
          })
        } else {
          this.setState({
            isRunning: true,
            currentTime: this.state.tTrabajo,
          })
        }
      }
      
    
    render() {
        return(
            <ImageBackground source={require("../assets/fondito.jpg")} resizeMode="cover" style={styles.container}>  
        <View style={styles.cont1}>
          <Text style={styles.titulo}>{this.state.isRunning ? "A trabajar!" : "Descanso"}</Text>
          <Cronometro currentTime={this.state.currentTime}/>
			  </View> 
        
        <View style={styles.cont2}>
          <View style={styles.tiempoDeTrabajoStack}>
              <Text style={styles.tiempoDeTrabajo}>Minutos de trabajo:</Text>
              <TextInput
              placeholder=""
              defaultValue="25"
              keyboardType= "numeric"
              style={styles.placeholder}  
              onChangeText={this.setTTrabajo}
              ></TextInput>
          </View>

          <View style={styles.tiempoDeDescansoStack}>
            <Text style={styles.tiempoDeDescanso}>Minutos de descanso:</Text>
            <TextInput
              placeholder=""
              defaultValue="5"
              style={styles.placeholder1}
              keyboardType= "numeric"
              onChangeText={this.setTDescanso}
            ></TextInput>
          </View>
        </View>

        <View style={styles.botones}>
        <TouchableOpacity >
          <View style={styles.bot1}>
            <Button color='#2EC621'  title="Iniciar" borderRadius="50" 
            onPress={this.iniciar}></Button>
          </View>
          <View style={styles.bot2}>
            <Button color='red' title="Detener"
            onPress={this.pausar}></Button>
          </View>
          <View>
            <Button title="Reiniciar"
            onPress={this.reiniciar}></Button>
          </View>
            
        </TouchableOpacity>

     </View>
    </ImageBackground>
    );
    }
}

//leftPadding lo busqué en internet porque no sabía cómo acomodar los segundos
function leftPadding(n) {
    if (parseInt(n) < 10) {
      return "0" + n.toString();
    } else {
      return n.toString();
    }
  }
  
  function getTiempo(val) {
    return leftPadding(val) + ":00";
  }

export default CronometroPomodoro