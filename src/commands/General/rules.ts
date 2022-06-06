/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
  constructor(client: WAClient, handler: MessageHandler) {
    super(client, handler, {
      command: "rules",
      description: "shows the rules for beyond",
      category: "general",
      usage: `${client.config.prefix}rules`,
      baseXp: 0,
    });
  }

  run = async (M: ISimplifiedMessage): Promise<void> => {
    const buttons = [
      {
        buttonId: "help",
        buttonText: { displayText: `${this.client.config.prefix}help` },
        type: 1,
      },
    ];

    const buttonMessage: any = {
      contentText: `_*🎇HELLO THERE BEYOND BOT HERE🎇*_\n _*FIRST OF ALL REMEMBER THIS WE ARE THE FIRST ORGANISATION WHO CREATED A BOT LIKE THIS AFTER INFINIT*_\n .How to add beyond bot to my group?\n Send group link to any rest of mods and they will add for you\n 2).What are the requirements to add bot in groups\n Need atleast 30+ participates to add beyond bot\n 3).How do i gain gold or xp\n Use $daily cmnd for daily gold and for xp using commands like $catch Pokemons $haigusha etc.\n 4).Where i can gamble Use $support to get our gamble and beyond support group link\n 5).Run a support bot in your group with beyond...You can deploy kaoi bot from here .<https://github.com/PrajjwalDatir/Kaoi>\n 6).why does the  bot not responding in my group?\n During the peak hours bot may become slow due to traffic.If bot is inactive more than 12 hours then maybe bot are banned from WhatsApp or Owner chilling with gf\n 7).spamming cmds in casino=2days ban\n 8)*.don't dm mods for asking to be a mod.\n\n 9).don't ask us to sell our bots.\n 10).the more good you are gonna be as a beyond user the more rewards you'll get\n`,
      footerText: "🎇 Beyond 🎇",
      buttons: buttons,
      headerType: 1,
    };
    await M.reply(buttonMessage, MessageType.buttonsMessage);
  };
}
