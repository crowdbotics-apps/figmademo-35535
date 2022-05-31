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
      <View style={styles.View_2_189}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aa82f51c-807b-4cac-985e-130cec861626"
          }}
          style={styles.ImageBackground_2_190}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_2_192}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_11"))
        }
      >
        <View style={styles.View_I2_192_151_330}>
          <Text style={styles.Text_I2_192_151_330}>Search</Text>
        </View>
        <View style={styles.View_I2_192_151_331}>
          <Text style={styles.Text_I2_192_151_331}>Enter</Text>
        </View>
        <View style={styles.View_I2_192_151_332} />
        <View style={styles.View_I2_192_151_333}>
          <Text style={styles.Text_I2_192_151_333}>|En enter|</Text>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b39e5531-676b-4f4b-98e5-ec885620280f"
        }}
        style={styles.ImageBackground_2_193}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ff758c44-3f8a-4445-9073-27e80a8c33ce"
        }}
        style={styles.ImageBackground_2_194}
      />
      <View style={styles.View_2_195}>
        <View style={styles.View_2_196}>
          <Text style={styles.Text_2_196}>Cody Fisher</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db59d5ff-a1b8-43c9-8b87-60b5dfe55ce0"
        }}
        style={styles.ImageBackground_2_197}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7444d072-1b21-49e0-ad0d-0ae4e9f68e39"
        }}
        style={styles.ImageBackground_2_198}
      />
      <View style={styles.View_2_199}>
        <View style={styles.View_2_200}>
          <Text style={styles.Text_2_200}>Johnny Watson</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c2ec8572-5fce-493b-a058-4c7fa2a3181d"
        }}
        style={styles.ImageBackground_2_201}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d105ba4-0686-44cc-adb2-441c0a34c615"
        }}
        style={styles.ImageBackground_2_202}
      />
      <View style={styles.View_2_203}>
        <View style={styles.View_2_204}>
          <Text style={styles.Text_2_204}>Jenny Wilson</Text>
        </View>
      </View>
      <View style={styles.View_2_205}>
        <View style={styles.View_2_206}>
          <View style={styles.View_I2_206_14_4533}>
            <Text style={styles.Text_I2_206_14_4533}>Frequently</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_207}>
        <Text style={styles.Text_2_207}>4513 Followers</Text>
      </View>
      <View style={styles.View_2_208}>
        <Text style={styles.Text_2_208}>Blocked accounts</Text>
      </View>
      <View style={styles.View_2_209}>
        <View style={styles.View_2_210}>
          <View style={styles.View_I2_210_14_4533}>
            <Text style={styles.Text_I2_210_14_4533}>A</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_211} />
      <View style={styles.View_2_212} />
      <View style={styles.View_2_213} />
      <View style={styles.View_2_214}>
        <Text style={styles.Text_2_214}>Block</Text>
      </View>
      <View style={styles.View_2_215} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f8a0d682-3de9-4eaa-8a07-1e456b9a0039"
        }}
        style={styles.ImageBackground_2_219}
      />
      <View style={styles.View_2_220}>
        <View style={styles.View_2_221}>
          <Text style={styles.Text_2_221}>Alpha Edwards</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb6630e5-8d15-416a-a774-939a4c522583"
        }}
        style={styles.ImageBackground_2_222}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/216a5296-9059-4861-a015-5ad5be0be437"
        }}
        style={styles.ImageBackground_2_224}
      />
      <View style={styles.View_2_225}>
        <View style={styles.View_2_226}>
          <Text style={styles.Text_2_226}>Anthony Hawkins</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc44f283-c2ec-485e-b13c-2cdba8daaa9d"
        }}
        style={styles.ImageBackground_2_227}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ade49db1-47e4-46f1-b7a9-f067666d0432"
        }}
        style={styles.ImageBackground_2_229}
      />
      <View style={styles.View_2_230}>
        <View style={styles.View_2_231}>
          <Text style={styles.Text_2_231}>And Henry</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cbc66889-a20f-41e6-8073-0feef15797e2"
        }}
        style={styles.ImageBackground_2_232}
      />
      <View style={styles.View_2_233} />
      <View style={styles.View_2_234} />
      <View style={styles.View_2_235} />
      <View style={styles.View_2_236}>
        <View style={styles.View_I2_236_14_4533}>
          <Text style={styles.Text_I2_236_14_4533}>Block</Text>
        </View>
      </View>
      <View style={styles.View_2_237}>
        <View style={styles.View_I2_237_14_4533}>
          <Text style={styles.Text_I2_237_14_4533}>Block</Text>
        </View>
      </View>
      <View style={styles.View_2_238}>
        <View style={styles.View_I2_238_14_4533}>
          <Text style={styles.Text_I2_238_14_4533}>Block</Text>
        </View>
      </View>
      <View style={styles.View_2_239}>
        <View style={styles.View_I2_239_14_4533}>
          <Text style={styles.Text_I2_239_14_4533}>Block</Text>
        </View>
      </View>
      <View style={styles.View_2_240}>
        <View style={styles.View_I2_240_14_4533}>
          <Text style={styles.Text_I2_240_14_4533}>Block</Text>
        </View>
      </View>
      <View style={styles.View_2_241}>
        <View style={styles.View_I2_241_14_4533}>
          <Text style={styles.Text_I2_241_14_4533}>Block</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83eb62f8-fef4-4d29-87bb-2e2b3e412e32"
        }}
        style={styles.ImageBackground_2_242}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  View_2_189: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_2_190: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_2_192: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_192_151_330: {
    flexGrow: 1,
    width: wp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_192_151_330: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_192_151_331: {
    flexGrow: 1,
    width: wp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_I2_192_151_331: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_192_151_332: {
    flexGrow: 1,
    width: wp("89%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 0.5
  },
  View_I2_192_151_333: {
    flexGrow: 1,
    width: wp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_I2_192_151_333: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_193: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  ImageBackground_2_194: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("39%")
  },
  View_2_195: {
    flexGrow: 1,
    width: wp("69%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_196: {
    flexGrow: 1,
    width: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_196: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_2_197: {
    flexGrow: 1,
    width: wp("96%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%")
  },
  ImageBackground_2_198: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("51%")
  },
  View_2_199: {
    flexGrow: 1,
    width: wp("69%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("53%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_200: {
    flexGrow: 1,
    width: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_2_201: {
    flexGrow: 1,
    width: wp("96%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60%")
  },
  ImageBackground_2_202: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("62%")
  },
  View_2_203: {
    flexGrow: 1,
    width: wp("69%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("64%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_204: {
    flexGrow: 1,
    width: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_204: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_2_205: {
    width: wp("103%"),
    minWidth: wp("103%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("30%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_2_206: {
    flexGrow: 1,
    width: wp("95%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_206_14_4533: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I2_206_14_4533: {
    color: "rgba(143, 141, 134, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_207: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("26%"),
    justifyContent: "center"
  },
  Text_2_207: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_208: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("26%"),
    justifyContent: "center"
  },
  Text_2_208: {
    color: "rgba(124, 124, 124, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_209: {
    width: wp("102%"),
    minWidth: wp("102%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("73%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_2_210: {
    flexGrow: 1,
    width: wp("94%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_210_14_4533: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I2_210_14_4533: {
    color: "rgba(143, 141, 134, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_211: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("42%")
  },
  View_2_212: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("53%")
  },
  View_2_213: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("64%")
  },
  View_2_214: {
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_2_214: {
    color: "rgba(30, 32, 34, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_2_215: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("86%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_219: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("84%")
  },
  View_2_220: {
    flexGrow: 1,
    width: wp("69%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("86%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_221: {
    flexGrow: 1,
    width: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_221: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_2_222: {
    flexGrow: 1,
    width: wp("96%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("93%")
  },
  ImageBackground_2_224: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("95%")
  },
  View_2_225: {
    flexGrow: 1,
    width: wp("69%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("97%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_226: {
    flexGrow: 1,
    width: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_2_227: {
    flexGrow: 1,
    width: wp("96%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("105%")
  },
  ImageBackground_2_229: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("106%")
  },
  View_2_230: {
    flexGrow: 1,
    width: wp("69%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("109%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_231: {
    flexGrow: 1,
    width: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_231: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_2_232: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("116%")
  },
  View_2_233: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("86%")
  },
  View_2_234: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("97%")
  },
  View_2_235: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("108%")
  },
  View_2_236: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("64%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_236_14_4533: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I2_236_14_4533: {
    color: "rgba(234, 67, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_237: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("53%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_237_14_4533: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I2_237_14_4533: {
    color: "rgba(234, 67, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_238: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_238_14_4533: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I2_238_14_4533: {
    color: "rgba(234, 67, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_239: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("108%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_239_14_4533: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I2_239_14_4533: {
    color: "rgba(234, 67, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_240: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("98%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_240_14_4533: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I2_240_14_4533: {
    color: "rgba(234, 67, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_241: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("86%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_241_14_4533: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I2_241_14_4533: {
    color: "rgba(234, 67, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_242: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
