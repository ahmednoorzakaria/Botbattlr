import React from "react";
import BotCard from "./BotCard";

function BotArmy({ bots, removeBot, deleteBot }) {
  const armyItem = bots.map((bot) => (
    <BotCard
      key={bot.id}
      bot={bot}
      clickEvent={removeBot}
      deleteBot={deleteBot}
      army
    />
  ));

  return <div className="bot-army-container">{armyItem}</div>;
}

export default BotArmy;
