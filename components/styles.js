import { StyleSheet } from 'react-native'; 

export const styles = StyleSheet.create({
    container: {
      flex:1,
    },
    cont1: {
      flex: 1,
      alignItems: 'center',
      marginTop: 100,   
      marginBottom: 50, 
    },
    titulo: {
      fontSize: 40,
      marginBottom: 25,
      alignSelf: 'center',
      },
    timerContainer: {
        marginTop: 25,
        borderRadius: 45,
        borderWidth: 3,
        borderColor: '#8EA2FA',
        position: 'absolute',
        top: 80,
        alignSelf: 'center',
        backgroundColor: '#FFFFFF40'
      },
    timer: {
        color: '#667EEA',
        fontSize: 55,
        padding: 10,
    },
    cont2 : {
      flex: 1,
      alignItems: 'center'
    },
    tiempoDeTrabajo: {
      color: "#121212",
      fontSize: 20,
      fontFamily: 'Roboto',
      textAlign: "center",
    },
    placeholder: {
      
      position: "absolute",
      height: 47,
      width: 131,
      borderWidth: 2,
      borderColor: "#000000",
      textAlign: "center",
      fontSize: 18,
      borderStyle: "solid",
      borderRadius: 10,
      backgroundColor:  '#FFFFFF20',
      top: 32,
      left: 36
    },
    tiempoDeTrabajoStack: {
      width: 203,
      height: 79,
    },
    tiempoDeDescanso: {
      top: 0,
      left: 0,
      position: "absolute",
      color: "#121212",
      height: 47,
      width: 203,
      fontSize: 20,
      fontFamily: 'Roboto',
      textAlign: "center"
      
    },
    placeholder1: {
      position: "absolute",
      color: "#121212",
      height: 47,
      width: 131,
      borderWidth: 2,
      borderColor: "#000000",
      textAlign: "center",
      fontSize: 18,
      fontFamily: 'Roboto',
      borderStyle: "solid",
      borderRadius: 10,
      top: 28,
      left: 36,
      backgroundColor: '#FFFFFF40'
    },
    tiempoDeDescansoStack: {
      width: 203,
      height: 75,
      marginTop: 27,
    },
   
    botones: {
      flex: 1,
      flexDirection: "row",
      marginTop: 30,
      justifyContent: 'center',
      
    },
    bot1 : {
      marginBottom: 15,
    },
    bot2 : {
      marginBottom: 15,
    }
    
  });