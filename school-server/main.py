import discord
from discord.ext import commands
from dotenv import load_dotenv
import os

load_dotenv()

bot = commands.Bot(command_prefix="!", intents=discord.Intents.all())

@bot.event
async def on_ready():
    print(f"Logged in as {bot.user.name}")
    await bot.change_presence(activity=discord.Game(name="Hausaufgaben"))


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

    nameFirstUpper = name[0].upper() + name[1:].lower()

    with open("./names.txt", "r") as file:
        names = file.read().split("\n")
    
    if nameLower in names and role not in ctx.author.roles:
        await ctx.message.delete()
        await ctx.author.add_roles(role)
        await ctx.author.edit(nick=nameFirstUpper)
        await ctx.send(f"✅ | {ctx.author.mention} wurde erfolgreich registriert.")
    elif role in ctx.author.roles:
        await ctx.send("❗️ | Du bist bereits registriert.")
    elif nameLower not in names:
        await ctx.send("❗️ | Name nicht gefunden. Bitte gib deinen Vornamen ein.")
    else:
        await ctx.send("❗️ | Ein Fehler ist aufgetreten. Melde dich bei <@969253860508061737>.")


bot.run(os.getenv("DISCORD_TOKEN"))