import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';

import * as ImagePicker from 'expo-image-picker';

import { useState } from 'react';
// ...rest of the import statements remain unchanged

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
}

export default function App() {
  const [showAppOptions, setShowAppOptions] = useState(false);
  // ...rest of the code remains same
}

const pickImageAsync = async () => {
  // ...rest of the code remains same

  if (!result.canceled) {
    setSelectedImage(result.assets[0].uri);
    setShowAppOptions(true);

  } else {
    // ...rest of the code remains same
  }
};

export default function App() {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })
  

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

    if (!result.canceled) {
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
};

export default function App() {
  return (
    <View style={styles.container}>
       {showAppOptions ? (
        <View />
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
        <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

{
  "assets"; [
    {
      "assetId": null,
      "base64": null,
      "duration": null,
      "exif": null,
      "height": 4800,
      "rotation": null,
      "type": "image",
      "uri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%username%252Fsticker-smash-47-beta/ImagePicker/77c4e56f-4ccc-4c83-8634-fc376597b6fb.jpeg",
      "width": 3200
    }
  ],
  "canceled"; false
}


const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
    const pickImageAsync = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });
  
      if (!result.canceled) {
        console.log(result);
      } else {
        alert('You did not select any image.');
      }
    };
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );


const styles = StyleSheet.create({
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
