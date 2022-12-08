import { Divider, Input, NumberInput, Radio, Table } from "@mantine/core";
import { useState } from "react";
import Head from "next/head";
import { ExpandedNumberInput } from "../components/expandedNumberInput";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [playerCount, setPlayerCount] = useState("1");
  const [scoreData, setScoreData] = useState([{ name: "", interview: 0, chiasm: 0, emphasis: 0, inclusio: 0 }]);

  const playerCountChanged = (value: string) => {
    const prevValue: number = parseInt(playerCount);
    const newValue: number = parseInt(value);
    setPlayerCount(value);

    let currentData = scoreData;
    // adding rows
    if (newValue > prevValue) {
      for (let i = 0; i < newValue - prevValue; i++) {
        currentData.push({
          name: "",
          interview: 0,
          chiasm: 0,
          emphasis: 0,
          inclusio: 0,
        });
      }
    } else {
      currentData = currentData.slice(0, newValue - prevValue);
    }

    console.log("currentData", currentData);

    setScoreData(currentData);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Acts of the Evangelists Scoreboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Acts of the Evangelists Scoreboard</h1>
        <Radio.Group
          name="favoriteFramework"
          label="Select number of players"
          spacing="lg"
          withAsterisk
          value={playerCount}
          onChange={playerCountChanged}
        >
          <Radio value="2" label="2" />
          <Radio value="3" label="3" />
          <Radio value="4" label="4" />
          <Radio value="5" label="5" />
        </Radio.Group>
        <Divider my="sm" />
        <Table striped withBorder withColumnBorders highlightOnHover>
          <thead>
            <tr>
              <th></th>
              <th>Interview</th>
              <th>Chiasm</th>
              <th>Emphasis</th>
              <th>Inclusio</th>
            </tr>
          </thead>
          <tbody>
            {scoreData.map((player, i) => (
              <tr key={i}>
                <td>
                  <Input placeholder="name" defaultValue={player.name}/>
                </td>
                <td>
                  <ExpandedNumberInput defaultValue={player.interview} />
                </td>
                <td>
                  <NumberInput defaultValue={player.chiasm} />
                </td>
                <td>
                  <NumberInput defaultValue={player.emphasis} />
                </td>
                <td>
                  <NumberInput defaultValue={player.inclusio} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </main>
    </div>
  );
}
