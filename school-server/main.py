import discord
from discord.ext import commands

bot = commands.Bot(command_prefix="!", intents=discord.Intents.all())

async def updateMessages():
    category_id = 1266341510345916416
    category = bot.get_channel(category_id)
    if not isinstance(category, discord.CategoryChannel):
        print(f"Channel with ID {category_id} is not a category.")
        return
    
    channels = category.channels

    for channel in channels:
        messages = []
        async for message in channel.history(limit=None):
            messages.append(message)
        if len(messages) > 10:
            index = -1
            while True:
                if messages[index].pinned:
                    index -= 1
                else:
                    break
            await messages[index].delete()

@bot.event
async def on_ready():
    print(f"Logged in as {bot.user.name}")

@bot.event
async def on_message(message):
    await updateMessages()
    await bot.process_commands(message)

@bot.command()
async def delete_oldest_message(ctx):
    channel = ctx.channel
    messages = []
    async for message in channel.history(limit=None):
        messages.append(message)
    if messages:
        await messages[-1].delete()

bot.run("")