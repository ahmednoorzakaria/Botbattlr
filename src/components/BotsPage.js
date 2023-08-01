import React, { useState, useEffect } from "react";
import BotArmy from "./BotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);

  function fetchData() {
    return fetch(` http://localhost:4000/bots`)
      .then((resp) => resp.json())
      .then((data) => {
        setBots(data);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  function enlistBot(bot) {
    setBots(bots.map((b) => (b.id === bot.id ? { ...b, army: true } : b)));
  }

  function removeBot(bot) {
    setBots(bots.map((b) => (b.id === bot.id ? { ...b, army: false } : b)));
  }

  function deleteBot(bot) {
    const deletedBot = bots.filter((b) => b.id !== bot.id);
    setBots(deletedBot);
  }

  return (
    <div>
      <BotArmy
        bots={bots.filter((b) => b.army)}
        removeBot={removeBot}
        deleteBot={deleteBot}
      />
      <BotCollection bots={bots} enlistBot={enlistBot} deleteBot={deleteBot} />
    </div>
  );
}

export default BotsPage;
