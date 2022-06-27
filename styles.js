import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
    
      backgroundColor: '#fff',
      flexDirection: "column",
      flexWrap: "wrap"
    },

    primeiraDiv: {

        height: 25,
        width: "100%",
        backgroundColor: "#50E3C2"

    },

    segundaDiv: {

        height: 100,
        width: 100,
        backgroundColor: "#F5A623",
        marginLeft: 130,
        marginTop: 50
    },

    terceiraDiv: {

        backgroundColor: "#F5A623",
        height: 30,
        width: 150,
        marginTop: 25,
        marginLeft: 105

    },

    quartaDiv: {

        height: 78,
        width: 180,
        marginTop: 40,
        backgroundColor: "#9013FE"

    },

    quintaDiv: {

        height: 78,
        width: 180,
        backgroundColor: "#4A90E2",
        marginTop: 40,

    },
    
    caixa:{

        flexDirection: "row",

    },

    sextaDiv: {

        backgroundColor: "#50E3C2",
        height: 13

    },

    setimaDiv:{

       flexDirection: "row",
       flexWrap: "wrap",
       justifyContent: "space-around"
    },

    caixas:{
        

        height: 100,
        width: 100,
        marginTop: 33,
        backgroundColor: "#F5A623",
        marginBottom: 32

    },

    oitavaDiv: {

        height: 61,
        backgroundColor: "#4A90E2",
        flexDirection: "row",
        alignItems: "flex-end"
    }

  });

  export default styles;
  