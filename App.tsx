import React from 'react';
import JSONTree from 'react-native-json-tree';
import surveySchema from "./src/surveySchema";

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

// check this in android
const MyStatusBar = ({backgroundColor} : {backgroundColor:any}) => (
  <View style={{ backgroundColor }}>
    <SafeAreaView>
      <StatusBar backgroundColor={backgroundColor} barStyle={'light-content'}/>
    </SafeAreaView>
  </View>
);

function App(): JSX.Element {
  return (
    <>
      <MyStatusBar backgroundColor="#400090"/>
      <SafeAreaView style={styles.safeBackground}>
        <View style={styles.header}>
          <Text style={styles.headerText}> 
            Personal History With Cancer 
          </Text>
        </View>

        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            Insert question here blah blah blahhh?
          </Text>
        </View>

        {/* <JSONTree
          data={surveySchema}
        ></JSONTree> */}
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>No</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeBackground: {
    backgroundColor:"#fff"
  },
  header: {
    padding: 15,
    backgroundColor: "#400090",
  },
  headerText: {
    textAlign: 'center',
    fontSize: 25,
    color: "#fff",
    fontFamily: "Sinhala Sangam MN",
    // fontFamily: "Khmer Sangam MN",
    // fontFamily: "Avenir",
  },
  questionContainer: {
    
  },
  questionText: {
    marginTop: 150,
    marginLeft: 50,
    marginRight: 50,
    textAlign: 'center',
    fontSize: 25,
    color: "#400090",
    fontFamily: "Sinhala Sangam MN",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 100,
  },
  button: {
    margin: 40,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 0.75,
    borderRadius: 20,
    borderColor: "#400090",
  },
  buttonText: {
    fontSize: 25,
    color: "#400090",
    fontFamily: "Sinhala Sangam MN",
  }
});

export default App;
