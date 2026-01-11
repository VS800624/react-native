import { Pressable, Text } from "react-native";

const CustomButton = ({ title, onPress, disabled }) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={`py-3 px-6 rounded-xl 
        ${disabled ? "bg-gray-400" : "bg-indigo-600 active:opacity-80"}
      `}
    >
      <Text className="text-white text-lg font-semibold text-center">
        {title}
      </Text>
    </Pressable>
  );
};

export default CustomButton
