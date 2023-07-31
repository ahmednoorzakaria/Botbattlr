import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, enlistBot, deleteBot }) {
  const botItem = bots.map((bot) => (
    <BotCard
      key={bot.id}
      bot={bot}
      clickEvent={enlistBot}
      deleteBot={deleteBot}
    />
  ));

  return <div className="bot-collection-container">{botItem}</div>;
}

export default BotCollection;
