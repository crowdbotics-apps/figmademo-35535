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
        style={styles.TouchableOpacity_2_126}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_66"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9a0d8b65-1f09-443b-97bc-d8a3577c0ca7"
          }}
          style={styles.ImageBackground_2_127}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_2_129}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_11"))
        }
      >
        <View style={styles.View_I2_129_151_330}>
          <Text style={styles.Text_I2_129_151_330}>Search</Text>
        </View>
        <View style={styles.View_I2_129_151_331}>
          <Text style={styles.Text_I2_129_151_331}>Enter</Text>
        </View>
        <View style={styles.View_I2_129_151_332} />
        <View style={styles.View_I2_129_151_333}>
          <Text style={styles.Text_I2_129_151_333}>|En enter|</Text>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5203725b-637a-4165-9d2f-dd0874b0b93e"
        }}
        style={styles.ImageBackground_2_130}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e2a62345-494d-4705-8bde-31576afb501a"
        }}
        style={styles.ImageBackground_2_131}
      />
      <View style={styles.View_2_132}>
        <View style={styles.View_2_133}>
          <Text style={styles.Text_2_133}>Cody Fisher</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ec01483-f62e-4e9c-b602-2803689fb622"
        }}
        style={styles.ImageBackground_2_134}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/365e1d28-d967-4059-a092-ee660c170d41"
        }}
        style={styles.ImageBackground_2_135}
      />
      <View style={styles.View_2_136}>
        <View style={styles.View_2_137}>
          <Text style={styles.Text_2_137}>Johnny Watson</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f7817bd-2bb6-4d47-a290-95f5a8a10324"
        }}
        style={styles.ImageBackground_2_138}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef32d042-67d1-4854-a5b8-2ee2e61902ab"
        }}
        style={styles.ImageBackground_2_139}
      />
      <View style={styles.View_2_140}>
        <View style={styles.View_2_141}>
          <Text style={styles.Text_2_141}>Jenny Wilson</Text>
        </View>
      </View>
      <View style={styles.View_2_142}>
        <View style={styles.View_2_143}>
          <View style={styles.View_I2_143_14_4533}>
            <Text style={styles.Text_I2_143_14_4533}>Frequently</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_144}>
        <Text style={styles.Text_2_144}>4513 Followers</Text>
      </View>
      <View style={styles.View_2_145}>
        <View style={styles.View_2_146}>
          <View style={styles.View_I2_146_14_4533}>
            <Text style={styles.Text_I2_146_14_4533}>A</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_147} />
      <View style={styles.View_2_148} />
      <View style={styles.View_2_149} />
      <View style={styles.View_2_150}>
        <Text style={styles.Text_2_150}>Followers</Text>
      </View>
      <View style={styles.View_2_151}>
        <View style={styles.View_2_152}>
          <View style={styles.View_2_153} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1be3834e-bc08-479c-942c-a339c075bf90"
            }}
            style={styles.ImageBackground_2_154}
          />
          <View style={styles.View_2_155}>
            <View style={styles.View_2_156}>
              <Text style={styles.Text_2_156}>Alpha Edwards</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/17a53f13-1ec7-4ecd-9ac1-53457156ee35"
            }}
            style={styles.ImageBackground_2_157}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5086bdb3-8b66-4772-bf8d-17a517aeafec"
            }}
            style={styles.ImageBackground_2_158}
          />
          <View style={styles.View_2_159}>
            <View style={styles.View_2_160}>
              <Text style={styles.Text_2_160}>Anthony Hawkins</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2586dd16-f455-48aa-9767-741eb7f39ea6"
            }}
            style={styles.ImageBackground_2_161}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4086aa5e-dae1-4069-a698-ee0479bf365d"
            }}
            style={styles.ImageBackground_2_162}
          />
          <View style={styles.View_2_163}>
            <View style={styles.View_2_164}>
              <Text style={styles.Text_2_164}>And Henry</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aefac7af-2522-4070-aa22-224a85f0d3a0"
            }}
            style={styles.ImageBackground_2_165}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e5a28bb-c39b-42a0-896f-cf07a0bbc875"
            }}
            style={styles.ImageBackground_2_166}
          />
          <View style={styles.View_2_167}>
            <View style={styles.View_2_168}>
              <Text style={styles.Text_2_168}>Alpha Edwards</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f0750c3-30b9-4fdf-8a6b-52dd4690a413"
            }}
            style={styles.ImageBackground_2_169}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2f32316-897c-47e5-bc9a-fa7c6f999c3f"
            }}
            style={styles.ImageBackground_2_170}
          />
          <View style={styles.View_2_171}>
            <View style={styles.View_2_172}>
              <Text style={styles.Text_2_172}>Anthony Hawkins</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f862225c-ec57-4508-a6fa-f58d43e33b8a"
            }}
            style={styles.ImageBackground_2_173}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2109f69a-64c9-4096-a20f-6d59c0585af3"
            }}
            style={styles.ImageBackground_2_174}
          />
          <View style={styles.View_2_175}>
            <View style={styles.View_2_176}>
              <Text style={styles.Text_2_176}>And Henry</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5888e5bf-0ea2-4eac-b160-26cc6a6f2c2e"
            }}
            style={styles.ImageBackground_2_177}
          />
          <View style={styles.View_2_178}>
            <View style={styles.View_2_179}>
              <View style={styles.View_2_180} />
              <View style={styles.View_2_181} />
              <View style={styles.View_2_182} />
              <View style={styles.View_2_183} />
              <View style={styles.View_2_184} />
              <View style={styles.View_2_185} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2_186}>
        <View style={styles.View_I2_186_14_4533}>
          <Text style={styles.Text_I2_186_14_4533}>Follow</Text>
        </View>
      </View>
      <View style={styles.View_2_187}>
        <View style={styles.View_I2_187_14_4533}>
          <Text style={styles.Text_I2_187_14_4533}>Follow</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  TouchableOpacity_2_126: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_2_127: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_2_129: {
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
  View_I2_129_151_330: {
    flexGrow: 1,
    width: wp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_129_151_330: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_129_151_331: {
    flexGrow: 1,
    width: wp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_I2_129_151_331: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_129_151_332: {
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
  View_I2_129_151_333: {
    flexGrow: 1,
    width: wp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_I2_129_151_333: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_130: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  ImageBackground_2_131: {
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
  View_2_132: {
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
  View_2_133: {
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
  Text_2_133: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_2_134: {
    flexGrow: 1,
    width: wp("96%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%")
  },
  ImageBackground_2_135: {
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
  View_2_136: {
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
  View_2_137: {
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
  Text_2_137: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_2_138: {
    flexGrow: 1,
    width: wp("96%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60%")
  },
  ImageBackground_2_139: {
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
  View_2_140: {
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
  View_2_141: {
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
  Text_2_141: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_2_142: {
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
  View_2_143: {
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
  View_I2_143_14_4533: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I2_143_14_4533: {
    color: "rgba(143, 141, 134, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_144: {
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
  Text_2_144: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_145: {
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
  View_2_146: {
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
  View_I2_146_14_4533: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I2_146_14_4533: {
    color: "rgba(143, 141, 134, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_147: {
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
  View_2_148: {
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
  View_2_149: {
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
  View_2_150: {
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_2_150: {
    color: "rgba(30, 32, 34, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_2_151: {
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
  View_2_152: {
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
  View_2_153: {
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
  ImageBackground_2_154: {
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
  View_2_155: {
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
  View_2_156: {
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
  Text_2_156: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_2_157: {
    flexGrow: 1,
    width: wp("96%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%")
  },
  ImageBackground_2_158: {
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
  View_2_159: {
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
  View_2_160: {
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
  Text_2_160: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_2_161: {
    flexGrow: 1,
    width: wp("96%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%")
  },
  ImageBackground_2_162: {
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
  View_2_163: {
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
  View_2_164: {
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
  Text_2_164: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_2_165: {
    flexGrow: 1,
    width: wp("96%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%")
  },
  ImageBackground_2_166: {
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
  View_2_167: {
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
  View_2_168: {
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
  Text_2_168: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_2_169: {
    flexGrow: 1,
    width: wp("96%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43%")
  },
  ImageBackground_2_170: {
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
  View_2_171: {
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
  View_2_172: {
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
  Text_2_172: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_2_173: {
    flexGrow: 1,
    width: wp("96%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55%")
  },
  ImageBackground_2_174: {
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
  View_2_175: {
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
  View_2_176: {
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
  Text_2_176: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_2_177: {
    flexGrow: 1,
    width: wp("96%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66%")
  },
  View_2_178: {
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
  View_2_179: {
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
  View_2_180: {
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
  View_2_181: {
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
  View_2_182: {
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
  View_2_183: {
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
  View_2_184: {
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
  View_2_185: {
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
  View_2_186: {
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
  View_I2_186_14_4533: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I2_186_14_4533: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_187: {
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
  View_I2_187_14_4533: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I2_187_14_4533: {
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
