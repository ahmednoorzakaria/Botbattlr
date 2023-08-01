import React, { useState } from "react";
import BotCard from "./BotCard";

function BotArmy({ bots, removeBot, deleteBot }) {
  const [selectedBot, setSelectedBot] = useState(null);

  function selectBot(bot) {
    setSelectedBot(bot);
  }

  const armyItems = bots.map((bot) => (
    <BotCard
      key={bot.id}
      bot={bot}
      clickEvent={removeBot}
      deleteBot={deleteBot}
      army
      isSelected={selectedBot === bot}
    />
  ));

  return <div className="bot-army-container">{armyItems}</div>;
}

export default BotArmy;
