import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import Layout from 'constants/Layout';

const styles = StyleSheet.create({
    preview: {
        height: Layout.window.height,
        width: "100%",
    },
})

export default class ZoomView extends Component {
  onGesturePinch = ({ nativeEvent }) => {
      this.props.onPinchProgress(nativeEvent.scale)
  }

  onPinchHandlerStateChange = (event) => {
      const pinchEnd = event.nativeEvent.state === State.END
      const pinchBegin = event.nativeEvent.oldState === State.BEGAN
      const pinchActive = event.nativeEvent.state === State.ACTIVE

      if (pinchEnd) {
          this.props.onPinchEnd()
      }
      else if (pinchBegin && pinchActive) {
          this.props.onPinchStart()
      }
  }

  render() {
      return (
          <PinchGestureHandler
              onGestureEvent={this.onGesturePinch}
              onHandlerStateChange={this.onPinchHandlerStateChange}>
              <View style={styles.preview}>
                  {this.props.children}
              </View>
          </PinchGestureHandler>
      )
  }
}