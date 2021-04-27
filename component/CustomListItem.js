import React from 'react';
import { StyleSheet, TextInput,Text, View } from 'react-native';
import { ListItem , Avatar } from 'react-native-elements';

export default function CustomListItem(id,chatName,enterChat) {
  return (
      <ListItem>
          <Avatar rounded source={{uri:"https://cdn.dribbble.com/users/1041205/screenshots/3636353/dribbble.jpg"}}/>
          <ListItem.Content>
              <ListItem.Title style={ {fontWeight:"800"}}>YouTube Chat</ListItem.Title>
              <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                  This is Test .This is Test .This is Test .
                  This is Test .This is Test .This is Test .This is Test .
                  This is Test .This is Test .This is Test .
              </ListItem.Subtitle>
          </ListItem.Content>
      </ListItem>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 