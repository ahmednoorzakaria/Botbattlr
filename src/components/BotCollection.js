import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, enlistBot, deleteBot }) {
  function handleEnlistBot(bot) {
    enlistBot(bot);
  }

  const botItems = bots.map((bot) => (
    <BotCard
      key={bot.id}
      bot={bot}
      clickEvent={handleEnlistBot}
      deleteBot={deleteBot}
      isSelected={false}
    />
  ));

  return <div className="bot-collection-container">{botItems}</div>;
}

export default BotCollection;
