function ChocolateScreen({ navigation }) {
    return (
      <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {sorveterias.map((item,index) =>(
            <Banner key={index} props={item} />
          ))}
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        
      </View>
      </ScrollView>
    );
  }