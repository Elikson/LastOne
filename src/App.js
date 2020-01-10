import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  Button,
  Alert,
  AsyncStorage
} from 'react-native';

import { Card, CardItem, Body} from 'native-base';

export default class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      name: ''
    }

    this._retrieveData()
  }

  _storeData = async () => {
    try {
      await AsyncStorage.setItem('name', this.state.name);
      this._retrieveData()
    } catch (error) {
      // Error saving data
    }
  };

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('name');
      if (value !== null) {
        // We have data!!
        console.log(value);
        this.setState({name: value})
      }
    } catch (error) {
      // Error retrieving data
      this.setState({name: 'erro'})
    }
  };

  onChangeText = (name) =>{
    this.setState({name: name})
  }

    render(){
      return (
        <View style={styles.padding}>
          <Text style={styles.title}>The Last One</Text>
          <ScrollView>
            <Card>
              <CardItem>
                <Body style={{flexDirection: 'row'}}>
                <Image
                  style={{width: 40, height: 40}}
                  source={require('./imgs/garrafao.png')}
                />
                  <View>
                    <Text>
                      Elikson Bastos Tavares
                    </Text>
                    <Text>
                      08/01/2020
                    </Text>
                  </View>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Body style={{flexDirection: 'row'}}>
                <Image
                  style={{width: 40, height: 40}}
                  source={require('./imgs/garrafao.png')}
                />
                  <View>
                    <Text>
                      Elikson Bastos Tavares
                    </Text>
                    <Text>
                      08/01/2020
                    </Text>
                  </View>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Body style={{flexDirection: 'row'}}>
                <Image
                  style={{width: 40, height: 40}}
                  source={require('./imgs/garrafao.png')}
                />
                  <View>
                    <Text>
                      Elikson Bastos Tavares
                    </Text>
                    <Text>
                      08/01/2020
                    </Text>
                  </View>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Body style={{flexDirection: 'row'}}>
                <Image
                  style={{width: 40, height: 40}}
                  source={require('./imgs/garrafao.png')}
                />
                  <View>
                    <Text>
                      Elikson Bastos Tavares
                    </Text>
                    <Text>
                      08/01/2020
                    </Text>
                  </View>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Body style={{flexDirection: 'row'}}>
                <Image
                  style={{width: 40, height: 40}}
                  source={require('./imgs/garrafao.png')}
                />
                  <View>
                    <Text>
                      Elikson Bastos Tavares
                    </Text>
                    <Text>
                      08/01/2020
                    </Text>
                  </View>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Body style={{flexDirection: 'row'}}>
                <Image
                  style={{width: 40, height: 40}}
                  source={require('./imgs/garrafao.png')}
                />
                  <View>
                    <Text>
                      Elikson Bastos Tavares
                    </Text>
                    <Text>
                      08/01/2020
                    </Text>
                  </View>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Body style={{flexDirection: 'row'}}>
                <Image
                  style={{width: 40, height: 40}}
                  source={require('./imgs/garrafao.png')}
                />
                  <View>
                    <Text>
                      Elikson Bastos Tavares
                    </Text>
                    <Text>
                      08/01/2020
                    </Text>
                  </View>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Body style={{flexDirection: 'row'}}>
                <Image
                  style={{width: 40, height: 40}}
                  source={require('./imgs/garrafao.png')}
                />
                  <View>
                    <Text>
                      Elikson Bastos Tavares
                    </Text>
                    <Text>
                      08/01/2020
                    </Text>
                  </View>
                </Body>
              </CardItem>
            </Card>
          </ScrollView>

          <View style={styles.footer}>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white', margin: 10 }}
              onChangeText={text => this.onChangeText(text)}
              value={this.state.name}
            />
            <Button
              title="Salvar"
              onPress={() => this._storeData()}
            />
          </View>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  title:{
    color: 'black',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15
  },
  padding: {
    padding: 16,
    flex: 1
  },
  footer:{
    backgroundColor: '#CDF0FF'
  }
});
