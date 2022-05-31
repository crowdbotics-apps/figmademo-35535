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
      <TouchableOpacity
        style={styles.TouchableOpacity_2_245}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_66"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df150283-6ae8-4468-b46e-76d0e1a44a76"
          }}
          style={styles.ImageBackground_2_246}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_2_248}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_11"))
        }
      >
        <View style={styles.View_I2_248_151_330}>
          <Text style={styles.Text_I2_248_151_330}>Search</Text>
        </View>
        <View style={styles.View_I2_248_151_331}>
          <Text style={styles.Text_I2_248_151_331}>Enter</Text>
        </View>
        <View style={styles.View_I2_248_151_332} />
        <View style={styles.View_I2_248_151_333}>
          <Text style={styles.Text_I2_248_151_333}>|En enter|</Text>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/636769ab-ef0a-4c98-8410-36fa82f3d65e"
        }}
        style={styles.ImageBackground_2_249}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62c07426-3d46-4595-ac47-30ad21957906"
        }}
        style={styles.ImageBackground_2_250}
      />
      <View style={styles.View_2_251}>
        <View style={styles.View_2_252}>
          <Text style={styles.Text_2_252}>Cody Fisher</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2784b3c4-1ffb-427e-b301-0fed1757425a"
        }}
        style={styles.ImageBackground_2_253}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2b6a8c0b-cd5f-4fe0-a594-a5444071ead4"
        }}
        style={styles.ImageBackground_2_254}
      />
      <View style={styles.View_2_255}>
        <View style={styles.View_2_256}>
          <Text style={styles.Text_2_256}>Johnny Watson</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/350c7835-3648-41c3-8af5-21f4f1d91454"
        }}
        style={styles.ImageBackground_2_257}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e2ab2aba-63f8-49e9-a1f2-0f3e33d4c752"
        }}
        style={styles.ImageBackground_2_258}
      />
      <View style={styles.View_2_259}>
        <View style={styles.View_2_260}>
          <Text style={styles.Text_2_260}>Jenny Wilson</Text>
        </View>
      </View>
      <View style={styles.View_2_261}>
        <View style={styles.View_2_262}>
          <View style={styles.View_I2_262_14_4533}>
            <Text style={styles.Text_I2_262_14_4533}>Frequently</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_263}>
        <Text style={styles.Text_2_263}>4513 Followers</Text>
      </View>
      <View style={styles.View_2_264}>
        <View style={styles.View_2_265}>
          <View style={styles.View_I2_265_14_4533}>
            <Text style={styles.Text_I2_265_14_4533}>A</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_266} />
      <View style={styles.View_2_267} />
      <View style={styles.View_2_268} />
      <View style={styles.View_2_269}>
        <Text style={styles.Text_2_269}>Followers</Text>
      </View>
      <View style={styles.View_2_270}>
        <View style={styles.View_2_271}>
          <View style={styles.View_2_272} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/472a37c9-660d-4067-8e09-553051ea46ad"
            }}
            style={styles.ImageBackground_2_273}
          />
          <View style={styles.View_2_274}>
            <View style={styles.View_2_275}>
              <Text style={styles.Text_2_275}>Alpha Edwards</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a7b98774-9ae1-4455-8e85-b18bead51032"
            }}
            style={styles.ImageBackground_2_276}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/80be0012-052f-4bdf-ae6e-4188ae8e689b"
            }}
            style={styles.ImageBackground_2_277}
          />
          <View style={styles.View_2_278}>
            <View style={styles.View_2_279}>
              <Text style={styles.Text_2_279}>Anthony Hawkins</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ac185f56-be75-4c08-8c11-47810c1c6b32"
            }}
            style={styles.ImageBackground_2_280}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b93307a6-3624-4517-bae5-a20d2da96113"
            }}
            style={styles.ImageBackground_2_281}
          />
          <View style={styles.View_2_282}>
            <View style={styles.View_2_283}>
              <Text style={styles.Text_2_283}>And Henry</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dfff9ed4-6fdd-43a7-80c2-aa11d50814bf"
            }}
            style={styles.ImageBackground_2_284}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51960fbf-3edd-45e5-a090-767649866b37"
            }}
            style={styles.ImageBackground_2_285}
          />
          <View style={styles.View_2_286}>
            <View style={styles.View_2_287}>
              <Text style={styles.Text_2_287}>Alpha Edwards</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0f91017-a6c7-490a-ae60-58bb0a910158"
            }}
            style={styles.ImageBackground_2_288}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/123105c4-811e-477e-a7d7-c0d1011d84e9"
            }}
            style={styles.ImageBackground_2_289}
          />
          <View style={styles.View_2_290}>
            <View style={styles.View_2_291}>
              <Text style={styles.Text_2_291}>Anthony Hawkins</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3995dcdf-1f26-4322-98b7-160bf55445c0"
            }}
            style={styles.ImageBackground_2_292}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dbd2d0aa-9de2-4822-8178-3110d2ecffd8"
            }}
            style={styles.ImageBackground_2_293}
          />
          <View style={styles.View_2_294}>
            <View style={styles.View_2_295}>
              <Text style={styles.Text_2_295}>And Henry</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/811dec6d-98a0-4f98-bcb7-41be4274b4e1"
            }}
            style={styles.ImageBackground_2_296}
          />
          <View style={styles.View_2_297}>
            <View style={styles.View_2_298}>
              <View style={styles.View_2_299} />
              <View style={styles.View_2_300} />
              <View style={styles.View_2_301} />
              <View style={styles.View_2_302} />
              <View style={styles.View_2_303} />
              <View style={styles.View_2_304} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2_305}>
        <View style={styles.View_I2_305_14_4533}>
          <Text style={styles.Text_I2_305_14_4533}>Follow</Text>
        </View>
      </View>
      <View style={styles.View_2_306}>
        <View style={styles.View_I2_306_14_4533}>
          <Text style={styles.Text_I2_306_14_4533}>Follow</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  TouchableOpacity_2_245: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_2_246: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_2_248: {
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
  View_I2_248_151_330: {
    flexGrow: 1,
    width: wp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_248_151_330: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_248_151_331: {
    flexGrow: 1,
    width: wp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_I2_248_151_331: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_248_151_332: {
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
  View_I2_248_151_333: {
    flexGrow: 1,
    width: wp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_I2_248_151_333: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_249: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  ImageBackground_2_250: {
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
  View_2_251: {
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
  View_2_252: {
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
  Text_2_252: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_2_253: {
    flexGrow: 1,
    width: wp("96%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%")
  },
  ImageBackground_2_254: {
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
  View_2_255: {
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
  View_2_256: {
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
  Text_2_256: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_2_257: {
    flexGrow: 1,
    width: wp("96%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60%")
  },
  ImageBackground_2_258: {
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
  View_2_259: {
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
  View_2_260: {
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
  Text_2_260: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_2_261: {
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
  View_2_262: {
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
  View_I2_262_14_4533: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I2_262_14_4533: {
    color: "rgba(143, 141, 134, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_263: {
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
  Text_2_263: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_264: {
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
  View_2_265: {
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
  View_I2_265_14_4533: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I2_265_14_4533: {
    color: "rgba(143, 141, 134, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_266: {
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
  View_2_267: {
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
  View_2_268: {
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
  View_2_269: {
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_2_269: {
    color: "rgba(30, 32, 34, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_2_270: {
    width: wp("102%"),
    minWidth: wp("102%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("84%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_271: {
    width: wp("102%"),
    minWidth: wp("102%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_272: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_273: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  View_2_274: {
    flexGrow: 1,
    width: wp("68%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_275: {
    flexGrow: 1,
    width: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_275: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_2_276: {
    flexGrow: 1,
    width: wp("96%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%")
  },
  ImageBackground_2_277: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("11%")
  },
  View_2_278: {
    flexGrow: 1,
    width: wp("68%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_279: {
    flexGrow: 1,
    width: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_279: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_2_280: {
    flexGrow: 1,
    width: wp("96%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%")
  },
  ImageBackground_2_281: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("22%")
  },
  View_2_282: {
    flexGrow: 1,
    width: wp("68%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_283: {
    flexGrow: 1,
    width: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_283: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_2_284: {
    flexGrow: 1,
    width: wp("96%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%")
  },
  ImageBackground_2_285: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("34%")
  },
  View_2_286: {
    flexGrow: 1,
    width: wp("68%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("37%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_287: {
    flexGrow: 1,
    width: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_287: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_2_288: {
    flexGrow: 1,
    width: wp("96%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43%")
  },
  ImageBackground_2_289: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("45%")
  },
  View_2_290: {
    flexGrow: 1,
    width: wp("68%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("48%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_291: {
    flexGrow: 1,
    width: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_291: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_2_292: {
    flexGrow: 1,
    width: wp("96%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55%")
  },
  ImageBackground_2_293: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("56%")
  },
  View_2_294: {
    flexGrow: 1,
    width: wp("68%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("59%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_295: {
    flexGrow: 1,
    width: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_295: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_2_296: {
    flexGrow: 1,
    width: wp("96%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66%")
  },
  View_2_297: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_298: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_299: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_300: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%")
  },
  View_2_301: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%")
  },
  View_2_302: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34%")
  },
  View_2_303: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45%")
  },
  View_2_304: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("56%")
  },
  View_2_305: {
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
  View_I2_305_14_4533: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I2_305_14_4533: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_306: {
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
  View_I2_306_14_4533: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I2_306_14_4533: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
