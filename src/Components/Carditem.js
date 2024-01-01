import React from 'react';
import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";

export default function Carditem() {
	return(
        <Card className="w-xs" decoration="top" decorationColor="indigo">
        <Flex justifyContent="between" alignItems="center">
          <BadgeDelta deltaType="moderateIncrease">+16.8%</BadgeDelta>
            <Text>Sales</Text>
         </Flex>
            <Metric>$ 34,443</Metric>
        </Card>
		)
}