import React from "react";
import { Alert, Center, VStack, HStack, Text, IconButton, CloseIcon, Box } from "native-base";

interface IAlert {
  showAlert: boolean;
}

export const AlertComponent = ({ showAlert }: IAlert) => {
  if (!showAlert) return null;

  return (
      <Alert style={{
        position: "absolute",
        zIndex: 1000,
      }} maxW="400" status="error">
        <VStack space={2} flexShrink={1} w="100%" zIndex={1000}>
          <HStack
            zIndex={1000}
            flexShrink={1}
            space={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <HStack flexShrink={1} space={2} alignItems="center">
              <Alert.Icon />
              <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                Gastando Energia!
              </Text>
            </HStack>
          </HStack>
        </VStack>
      </Alert>
  );
};
