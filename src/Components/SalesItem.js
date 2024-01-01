import React, {useState} from "react";
import {
	BadgeDelta,
	Button,
	Card,
	DonutChart,
	Flex,
	TabGroup,
	Tab,
	TabList,
	Bold,
	Divider,
	List,
	ListItem,
	Metric,
	Text,
	Title,
} from "@tremor/react";

import{
 ArrowRight,
 ChartPie,
 ViewList
} from "heroicons-react";

const stocks = [
  {
    name: "Off Running AG",
    value: 10456,
    performance: "6.1%",
    deltaType: "increase",
  },
  {
    name: "Not Normal Inc.",
    value: 5789,
    performance: "1.2%",
    deltaType: "moderateDecrease",
  },
  {
    name: "Logibling Inc.",
    value: 4367,
    performance: "2.3%",
    deltaType: "moderateIncrease",
  },
  {
    name: "Raindrop Inc.",
    value: 3421,
    performance: "0.5%",
    deltaType: "moderateDecrease",
  },
  {
    name: "Mwatch Group",
    value: 1432,
    performance: "3.4%",
    deltaType: "decrease",
  },
];

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};
export default function SalesItem() {
	const [selectedIndex, setSelectedIndex] = useState(0)
 return(
        <Card className="max-w-full mx-auto">
          <flex className="space-x-8 flex-col lg:flex-row">
            <Title>OverView</Title>
              <TabGroup index={setSelectedIndex} onIndexChange={setSelectedIndex}>
                <TabList variant="solid">
                  <Tab icon={ChartPie}>Chart</Tab>
                    <Tab icon={ViewList}>List</Tab>
                   </TabList>
               </TabGroup>
           </flex>
           <Text className="mt-8">PortFolio Value</Text>
           <Metric> $ 25,465</Metric>
           <Divider/>
           <Text className="mt-8">
              <Bold>Asset Allocation</Bold>
           </Text>
             <Text>1 Asset class - $ Holding </Text>
             {selectedIndex === 0 ? (
                 <DonutChart
                 data={stocks}
                 valueFormatter={dataFormatter}
                 showAnimation={false}
                 category="value"
                 index="name"
                 className="mt-8"/>
                 ) :(
                  <>
          <Flex className="mt-8" justifyContent="between">
            <Text className="truncate">
              <Bold>Stocks</Bold>
            </Text>
            <Text>Since transaction</Text>
          </Flex>
          <List className="mt-4">
            {stocks.map((stock) => (
              <ListItem key={stock.name}>
                <Text>{stock.name}</Text>
                <Flex className="space-x-2" justifyContent="end">
                  <Text>
                    $ {Intl.NumberFormat("us").format(stock.value).toString()}
                  </Text>
                </Flex>
              </ListItem>
            ))}
          </List>
        </>
      )}
      <Flex className="mt-6 pt-4 border-t">
        <Button
          size="xs"
          variant="light"
          icon={ArrowRight}
          iconPosition="right"
        >
          View more
        </Button>
      </Flex>
        </Card>
 	)
}