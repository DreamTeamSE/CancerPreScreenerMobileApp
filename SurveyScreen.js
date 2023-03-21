import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

// TODO update this comment
{/*
    The below code, lines 20-63 utilized chatGPT:
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
  const [webViewLoaded, setWebViewLoaded] = useState(false);
  const [time, setTime] = useState(0);

  const onWebViewLoad = () => {
    setWebViewLoaded(true);

    setInterval(() => {
      setTime(prevTime => {
          console.log("Time: ", prevTime + 1);
          return prevTime + 1;
       });
    }, 1000);
  };

  const renderWebView = () => {
    return (
      <WebView
        source={{ uri: 'https://surveyjs.io/published?id=7765f129-0ddd-4eee-8aa3-4c6de2f5c40c' }}
        style={webViewLoaded ? styles.webView : styles.hidden}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onLoad={onWebViewLoad}
        originWhitelist={['*']}
        useWebKit={true}
      />
    );
  };

  return (
    <View style={styles.container}>
      {renderWebView()}
      {!webViewLoaded && <Text>Loading survey...</Text>}
    </View>
  );
};

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
