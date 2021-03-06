import {StyleSheet} from "react-native";
import commonStyles from "src/styles/commonStyles";

const styles = StyleSheet.create({
	toolBar: {
		flexDirection: "row",
		width: "100%",
		...commonStyles.centerChildren,
		justifyContent: "space-around",
		position: "absolute",
		bottom: 24
	},
});

export default styles;
