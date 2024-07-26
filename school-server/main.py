import discord
from discord.ext import commands
from dotenv import load_dotenv
import os

load_dotenv()


bot = commands.Bot(command_prefix="!", intents=discord.Intents.all())

@bot.event
async def on_ready():
    print(f"Logged in as {bot.user.name}")


@bot.event
async def on_member_join(member):
    off_topic = member.guild.get_channel(1266357527205908572)
    
    await off_topic.send(f"👋 | Willkommen auf dem Server, {member.mention}. Registriere dich bitte mit `!register <vorname>`")

@bot.event
async def on_member_remove(member):
    off_topic = member.guild.get_channel(1266357527205908572)
    
    await off_topic.send(f"{member.name} hat uns verlassen.")

@bot.command()
async def register(ctx, name):
    role = discord.utils.get(ctx.guild.roles, name="10cT")

    nameLower = name.lower()

    with open("./names.txt", "r") as file:
        names = file.read().split("\n")
    
    if nameLower in names:
        await ctx.message.delete()
        await ctx.author.add_roles(role)
        await ctx.send(f"✅ | {ctx.author.mention} wurde erfolgreich registriert.")
    else:
        await ctx.send("❗️ | Name nicht gefunden. Bitte gib deinen Vornamen ein.")


bot.run(os.getenv("DISCORD_TOKEN"))