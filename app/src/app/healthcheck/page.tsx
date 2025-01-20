"use client";
import { Box, VStack, Text, Spinner, Heading, useColorModeValue, Divider } from "@chakra-ui/react";
import { CheckCircleIcon, WarningIcon, InfoIcon } from "@chakra-ui/icons";
import React, { useEffect, useMemo, useState } from "react";
import { healthcheck } from "@/firebase/Functions";

const HealthcheckTemplate = () => {
  const [isHealthy, setIsHealthy] = useState<boolean | null>(null);
  const [isFirebaseFunctionsHealthy, setIsFirebaseFunctionsHealthy] = useState<boolean | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const successColor = useColorModeValue("green.500", "green.200");
  const errorColor = useColorModeValue("red.500", "red.200");
  const infoColor = useColorModeValue("blue.500", "blue.200");

  
  const requiredEnvVars = useMemo(() => ({
    NEXT_PUBLIC_GCP_PROJECT_ID: process.env.NEXT_PUBLIC_GCP_PROJECT_ID,
    NEXT_PUBLIC_GCP_REGION: process.env.NEXT_PUBLIC_GCP_REGION,
  }), []);

  useEffect(() => {
    const checkEnvVariables = () => {
      const isAllEnvVarsSet = Object.values(requiredEnvVars).every((envVar) => {
        return envVar !== undefined && envVar !== "";
      });

      setIsHealthy(isAllEnvVarsSet);
    };

    const checkFirebaseFunctions = async () => {
      try {
        const result = await healthcheck();
        setIsFirebaseFunctionsHealthy(result.data.isHealthy);
        setIsAuthenticated(result.data.isAuthenticated);
      } catch (error) {
        console.error("Error calling Firebase Functions healthcheck:", error);
        setIsFirebaseFunctionsHealthy(false);
        setIsAuthenticated(false);
      }
    };

    checkEnvVariables();
    checkFirebaseFunctions();
  }, [requiredEnvVars]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      minH="100vh"
      bg={useColorModeValue("gray.50", "gray.800")}
      position="relative"
      p={8}
    >
      <VStack spacing={8} alignItems="stretch">
        <Heading as="h1" size="xl" textAlign="center" color={useColorModeValue("gray.800", "white")}>
          Healthcheck
        </Heading>

        {/* Environment Variables Healthcheck */}
        <Box>
          <Heading as="h2" size="lg" mb={4} textAlign="center">
            Environment Variables
          </Heading>
          {isHealthy === null ? (
            <Spinner size="xl" alignSelf="center" />
          ) : isHealthy ? (
            <Box textAlign="center">
              <CheckCircleIcon boxSize={12} color={successColor} />
              <Text fontSize="xl" fontWeight="bold" mt={2} color={successColor}>
                All environment variables are set!
              </Text>
            </Box>
          ) : (
            <Box textAlign="center">
              <WarningIcon boxSize={12} color={errorColor} />
              <Text fontSize="xl" fontWeight="bold" mt={2} color={errorColor}>
                Environment variables are not properly set.
              </Text>
            </Box>
          )}
          <VStack spacing={4} alignItems="stretch" mt={4}>
            {Object.entries(requiredEnvVars).map(([key, value]) => (
              <Box key={key} textAlign="center">
                <Text fontWeight="bold">{key}:</Text>
                <Text>{value || "-"}</Text>
              </Box>
            ))}
          </VStack>
        </Box>

        <Divider />

        {/* Firebase Functions Healthcheck */}
        <Box>
          <Heading as="h2" size="lg" mb={4} textAlign="center">
            Firebase Functions
          </Heading>
          {isFirebaseFunctionsHealthy === null ? (
            <Spinner size="xl" alignSelf="center" />
          ) : isFirebaseFunctionsHealthy ? (
            <Box textAlign="center">
              <CheckCircleIcon boxSize={12} color={successColor} />
              <Text fontSize="xl" fontWeight="bold" mt={2} color={successColor}>
                Healthcheck Functions are healthy!
              </Text>
            </Box>
          ) : (
            <Box textAlign="center">
              <WarningIcon boxSize={12} color={errorColor} />
              <Text fontSize="xl" fontWeight="bold" mt={2} color={errorColor}>
                Healthcheck Functions are not healthy.
              </Text>
            </Box>
          )}
        </Box>

        <Divider />

        {/* Authentication Status */}
        <Box>
          <Heading as="h2" size="lg" mb={4} textAlign="center">
            Authentication Status
          </Heading>
          {isAuthenticated === null ? (
            <Spinner size="xl" alignSelf="center" />
          ) : isAuthenticated ? (
            <Box textAlign="center">
              <CheckCircleIcon boxSize={12} color={successColor} />
              <Text fontSize="xl" fontWeight="bold" mt={2} color={successColor}>
                User is authenticated
              </Text>
            </Box>
          ) : (
            <Box textAlign="center">
              <InfoIcon boxSize={12} color={infoColor} />
              <Text fontSize="xl" fontWeight="bold" mt={2} color={infoColor}>
                User is not authenticated
              </Text>
            </Box>
          )}
        </Box>
      </VStack>
    </Box>
  );
};

export default function Healthcheck() {
  return <HealthcheckTemplate />;
}