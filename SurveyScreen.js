import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

{/*
    The below code regarding WebView utilized the assistance of ChatGPT to...
    * To figure out how to use react-native-webview
    * To figure out the necessary style sheets
    * Use of a state variable for loading the survey

    It is important to note that to get to this point a lot of time and questions were asked to
    chatGPT. This started off with asking simple questions such as what methods can be used to embed
    our surveyJS survey, and then it became more specific as many initial suggestions and examples
    failed (ex. survey-react). The reason chatGPT was used because of a lack of information, from
    our research, as to how to embed a survey and a lot of resources focused on React rather than
    React Native. The packages used in React were able to be installed but would not work in React
    Native.
*/}

const SurveyScreen = () => {
  // variable used to determine if the web view has successfully loaded or not
  const [webViewLoaded, setWebViewLoaded] = useState(false);

  // holds the url to our web application
  const webPage = 'https://runtimeterror-seniorproj.netlify.app'

  // when the web view is loaded, the state variable needs to be set to true
  const onWebViewLoad = () => {
    setWebViewLoaded(true);
  };

  // utilizes WebView to render our web application, sets webViewLoaded to true
  const renderWebView = () => {
    return (
      <WebView
        source = {{ uri: webPage }}
        style = {webViewLoaded ? styles.webView : styles.hidden}
        javaScriptEnabled = {true}
        domStorageEnabled = {true}
        onLoad = {onWebViewLoad}
        originWhitelist = {['*']}
        useWebKit = {true}
      />
    );
  };

  // returns the WebView and if it has not loaded yet then the user will be prompted that it is loading
  return (
    <View style={styles.container}>
      {renderWebView()}
      {!webViewLoaded && <Text>Loading survey...</Text>}
    </View>
  );
};

// style sheet for presenting the WebView on the screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webView: {
    flex: 1,
  },
  hidden: {
    height: 0,
    width: 0,
  },
});

export default SurveyScreen;
