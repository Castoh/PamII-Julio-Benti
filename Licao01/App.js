import { StatusBar } from 'expo-status-bar';


import { StyleSheet, View,  Platform  } from 'react-native';


import Button from './components/Button';
import ImageViewer from './components/ImageViewer';

import * as ImagePicker from 'expo-image-picker';

import { useState } from 'react';
// ...rest of the import statements remain unchanged

import CircleButton from './components/CircleButton';
import IconButton from './components/IconButton';

import EmojiPicker from "./components/EmojiPicker";

import EmojiList from './components/EmojiList';

import EmojiSticker from './components/EmojiSticker';

import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      {/* ...rest of the code remains */}
    </GestureHandlerRootView>
  )
}

import * as MediaLibrary from 'expo-media-library';

import domtoimage from 'dom-to-image';





// ...rest of the code remains same

export default function App() {
  const [status, requestPermission] = MediaLibrary.usePermissions();
  // ...rest of the code remains same

  if (status === null) {
    requestPermission();
  }

  // ...rest of the code remains same
}

import { captureRef } from 'react-native-view-shot';

import { useState, useRef } from 'react';

const onSaveImageAsync = async () => {
  if (Platform.OS !== 'web') {
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });
      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        alert('Saved!');
      }
    } catch (e) {
      console.log(e);
    }
  } else {
    try {
      const dataUrl = await domtoimage.toJpeg(imageRef.current, {
        quality: 0.95,
        width: 320,
        height: 440,
      });

      let link = document.createElement('a');
      link.download = 'sticker-smash.jpeg';
      link.href = dataUrl;
      link.click();
    } catch (e) {
      console.log(e);
    }
  }
};


export default function App() {
   const imageRef = useRef();

  // ...rest of the code remains same

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
        </View>
      </View>
      {/* ...rest of the code remains same */}
    </GestureHandlerRootView>
  );
}

export default function App() {
  const onSaveImageAsync = async () => {
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        alert("Saved!");
      }
    } catch (e) {
      console.log(e);
    }
  };
  // ...rest of the code remains same
}


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
  // ...rest of the code remains same

  return (
    <View>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
        {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
      </View>
      {/* ...rest of the code remains same */}
    </View>
  );
}

export default function App() {
  const [pickedEmoji, setPickedEmoji] = useState(null);
  // ...rest of the code remain same

  return (
    <View style={styles.container}>
      {/* rest of the code remains unchanged */}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // ...rest of the code remains same

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* ...rest of the code remains same */}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        {/* A list of emoji component will go here */}
      </EmojiPicker>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  // ...rest of the code remains same
  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    // we will implement this later
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  return (
    <View style={styles.container}>
      {/* ...rest of the code remains same */}
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        // ...rest of the code remains same
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const style = StyleSheet.create({
  // ...previous styles remain unchanged
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
})

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
