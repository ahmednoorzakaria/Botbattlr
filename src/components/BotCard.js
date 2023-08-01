import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, clickEvent, deleteBot, army, isSelected }) {
  const botClassName = army ? "bot-card-army" : "bot-card";
  const selectedClassName = isSelected ? "selected" : "";

  return (
    <div
      className={`${botClassName} ${selectedClassName}`}
      onClick={() => clickEvent(bot)}
      style={{ borderColor: bot.army ? "green" : "black" }}
    >
      <div className="ui card">
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            Health: {bot.health}
          </span>
          <span>
            <i className="icon lightning" />
            Damage: {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            Armor: {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={(event) => {
                  event.stopPropagation();
                  deleteBot(bot);
                }}
              >
                Delete
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
