import React from 'react';
import {View, Text, ScrollView, StatusBar, StyleSheet} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
export default function HomeComponent() {
  return (
    <View>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>Store Near By</Text>
        <Card style={styles.card}>
          <Card.Title
            title="Fast Food"
            subtitle="Card Subtitle"
            left={LeftContent}
          />
          <Card.Content>
            {/* <Title>Asian Food</Title> */}
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          <Card.Cover
            source={{
              uri: 'https://images.unsplash.com/photo-1530554764233-e79e16c91d08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhc3QlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
            }}
          />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Title
            title="Asian Food"
            subtitle="Card Subtitle"
            left={LeftContent}
          />
          <Card.Content>
            {/* <Title>Card title</Title> */}
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          <Card.Cover
            source={{
              uri: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXNpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
            }}
          />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Title
            title="Hot Food"
            subtitle="Card Subtitle"
            left={LeftContent}
          />
          <Card.Content>
            {/* <Title>Hot Food</Title> */}
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          <Card.Cover
            source={{
              uri: 'https://images.unsplash.com/photo-1554478299-725a76d9badc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdCUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
            }}
          />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ecf0f1',
  },
  card: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 20,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
});
