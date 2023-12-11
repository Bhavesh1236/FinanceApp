
Search
Write
Sign up

Sign in



Creating a Gradient Border Effect in React Native using Expo’s LinearGradient
Sarmila Sivaraja
Sarmila Sivaraja

·
Follow

3 min read
·
Jun 20
3





React Native is a popular framework for building mobile applications, allowing developers to write cross-platform code using JavaScript. In this article, we’ll explore how to create a gradient border in a React Native component using the Expo framework.

Prerequisites: To follow along, you’ll need a basic understanding of React Native and have Expo installed in your development environment.

Setting Up the Project: Before we begin, make sure you have a new or existing React Native project set up with Expo. If you don’t have a project yet, you can create one by running the following command in your terminal:

expo init MyProject
Once the project is set up, navigate to its directory and install the required dependencies:

cd MyProject
npm install expo-linear-gradient
Creating the Gradient Border Component: In this example, we’ll create a React Native component called “BorderGradient” that renders a view with a gradient border. Let’s dive into the code:

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const BorderGradient = () => {
  return (
    <>
      <LinearGradient
        colors={['#bb52aa', '#63ff85']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.linearGradient}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.buttonText}>THIS GRADIENT BORDER</Text>
        </View>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: 150,
    width: 200,
    borderRadius: 20, // <-- Outer Border Radius
  },
  innerContainer: {
    borderRadius: 15, // <-- Inner Border Radius
    flex: 1,
    margin: 5, // <-- Border Width
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#cc2b5e',
    backgroundColor: 'transparent',
  },
});

export default BorderGradient;
