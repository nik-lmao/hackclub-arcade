import random

print("Welcome to Nikita's Blackjack!")



# Draw initial cards
player_hand = [random.choice([2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11]), random.choice([2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11])]
dealer_hand = [random.choice([2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11]), random.choice([2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11])]


while True:
    player_value = sum(player_hand)
    ace_count = player_hand.count(11)
    
    while player_value > 21 and ace_count:
        player_value -= 10
        ace_count -= 1

    print(f"Player's hand: {player_hand} with value {player_value}")

    if player_value >= 21:
        break

    action = input("Do you want to hit or stand? (h/s): ")
    if action == 'h':
        player_hand.append(random.choice([2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11]))
    
    elif action == 's':
        break
    else:
        print("Invalid choice!")