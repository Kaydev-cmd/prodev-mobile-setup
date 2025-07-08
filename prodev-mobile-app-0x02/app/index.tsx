import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("@/assets/images/backgroundImage.png")}
          style={styles.background}
          resizeMode="cover"
        />
        <View style={styles.companyLogo}>
          <Image source={require("@/assets/images/Logo.png")} />
        </View>
        <View style={styles.textGroup}>
          <Text style={styles.textLarge}>Find your favorite place here</Text>
          <Text style={styles.textSmall}>The best prices for over 2</Text>
          <Text style={styles.textSmall}>million properties worldwide</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: Dimensions.get("window").height,
  },
  companyLogo: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    marginBottom: 50,
  },
  textGroup: {
    alignItems: "center",
  },
  textLarge: {
    color: "white",
    fontWeight: "800",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 12,
  },
  textSmall: {
    color: "white",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
  },
});
