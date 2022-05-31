import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd372d9e-21a0-4391-ace4-f547fa37defd"
        }}
        style={styles.ImageBackground_2_67}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/76b80708-0d9c-45be-8a8b-feaa9f946854"
        }}
        style={styles.ImageBackground_2_69}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3a05b444-4090-4bd7-9519-77955155fb17"
        }}
        style={styles.ImageBackground_2_71}
      />
      <View style={styles.View_2_77}>
        <Text style={styles.Text_2_77}>Profile</Text>
      </View>
      <View style={styles.View_2_78}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c0e0cee-75d4-4c91-9cbb-33dc62f49324"
          }}
          style={styles.ImageBackground_2_79}
        />
      </View>
      <View style={styles.View_2_81}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92774721-8db9-41e6-b126-bd8a31bf7ddd"
          }}
          style={styles.ImageBackground_I2_81_2_31}
        />
        <View style={styles.View_I2_81_214_570} />
      </View>
      <View style={styles.View_2_82}>
        <Text style={styles.Text_2_82}>Username</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_2_83}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_125"))
        }
      >
        <Text style={styles.Text_2_83}>4513</Text>
      </TouchableOpacity>
      <View style={styles.View_2_84}>
        <Text style={styles.Text_2_84}>2154</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_2_85}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_125"))
        }
      >
        <Text style={styles.Text_2_85}>Followers</Text>
      </TouchableOpacity>
      <View style={styles.View_2_86}>
        <Text style={styles.Text_2_86}>Following</Text>
      </View>
      <View style={styles.View_2_87}>
        <View style={styles.View_2_88} />
        <View style={styles.View_2_89} />
        <View style={styles.View_2_90}>
          <Text style={styles.Text_2_90}>Messages</Text>
        </View>
        <View style={styles.View_2_91}>
          <Text style={styles.Text_2_91}>Follow</Text>
        </View>
      </View>
      <View style={styles.View_2_92}>
        <View style={styles.View_2_93}>
          <View style={styles.View_2_94}>
            <View style={styles.View_2_95} />
            <View style={styles.View_2_96} />
            <View style={styles.View_2_97} />
            <View style={styles.View_2_98} />
            <View style={styles.View_2_99} />
            <View style={styles.View_2_100} />
            <View style={styles.View_2_101} />
            <View style={styles.View_2_102} />
            <View style={styles.View_2_103} />
            <View style={styles.View_2_104} />
            <View style={styles.View_2_105} />
            <View style={styles.View_2_106} />
            <View style={styles.View_2_107} />
            <View style={styles.View_2_108} />
            <View style={styles.View_2_109} />
            <View style={styles.View_2_110} />
            <View style={styles.View_2_111} />
            <View style={styles.View_2_112} />
            <View style={styles.View_2_113} />
            <View style={styles.View_2_114} />
            <View style={styles.View_2_115} />
            <View style={styles.View_2_116} />
            <View style={styles.View_2_117} />
            <View style={styles.View_2_118} />
            <View style={styles.View_2_119} />
            <View style={styles.View_2_120} />
            <View style={styles.View_2_121} />
            <View style={styles.View_2_122} />
            <View style={styles.View_2_123} />
            <View style={styles.View_2_124} />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  ImageBackground_2_67: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_2_69: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%")
  },
  ImageBackground_2_71: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_2_77: {
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_2_77: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_2_78: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_2_79: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_81: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_81_2_31: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2_81_214_570: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%")
  },
  View_2_82: {
    width: wp("18%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    justifyContent: "flex-start"
  },
  Text_2_82: {
    color: "rgba(28, 26, 25, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_83: {
    width: wp("9%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    justifyContent: "flex-start"
  },
  Text_2_83: {
    color: "rgba(28, 26, 25, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_84: {
    width: wp("9%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    justifyContent: "flex-start"
  },
  Text_2_84: {
    color: "rgba(28, 26, 25, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_85: {
    width: wp("14%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    justifyContent: "flex-start"
  },
  Text_2_85: {
    color: "rgba(28, 26, 25, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_86: {
    width: wp("13%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    justifyContent: "flex-start"
  },
  Text_2_86: {
    color: "rgba(28, 26, 25, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_87: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("42%")
  },
  View_2_88: {
    width: wp("61%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(241, 241, 241, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_2_89: {
    width: wp("28%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_2_90: {
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_2_90: {
    color: "rgba(124, 124, 124, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_2_91: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_2_91: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_2_92: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("63%"),
    minHeight: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_93: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("86%"),
    minHeight: hp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_94: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("117%"),
    minHeight: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_95: {
    width: wp("65%"),
    height: hp("33%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_2_96: {
    width: wp("32%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(252, 241, 214, 1)"
  },
  View_2_97: {
    width: wp("32%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    backgroundColor: "rgba(217, 218, 221, 1)"
  },
  View_2_98: {
    width: wp("32%"),
    height: hp("16%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_2_99: {
    width: wp("32%"),
    height: hp("16%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(249, 216, 217, 1)"
  },
  View_2_100: {
    width: wp("32%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_2_101: {
    width: wp("32%"),
    height: hp("16%"),
    top: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_2_102: {
    width: wp("32%"),
    height: hp("16%"),
    top: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_2_103: {
    width: wp("32%"),
    height: hp("16%"),
    top: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    backgroundColor: "rgba(252, 241, 214, 1)"
  },
  View_2_104: {
    width: wp("65%"),
    height: hp("33%"),
    top: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    backgroundColor: "rgba(249, 216, 217, 1)"
  },
  View_2_105: {
    width: wp("32%"),
    height: hp("16%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_2_106: {
    width: wp("32%"),
    height: hp("16%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_2_107: {
    width: wp("32%"),
    height: hp("16%"),
    top: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(252, 241, 214, 1)"
  },
  View_2_108: {
    width: wp("32%"),
    height: hp("16%"),
    top: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_2_109: {
    width: wp("32%"),
    height: hp("16%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_2_110: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_2_111: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  View_2_112: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  View_2_113: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_2_114: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%")
  },
  View_2_115: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_2_116: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_2_117: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  View_2_118: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_2_119: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%")
  },
  View_2_120: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  View_2_121: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_2_122: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_2_123: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  View_2_124: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
