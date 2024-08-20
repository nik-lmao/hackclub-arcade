import random
import os



print("Welcome to Blackjack!")


def main():

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
        
        else:
            break

    player_value = sum(player_hand)
    ace_count = player_hand.count(11)


    while player_value > 21 and ace_count:
        
        player_value -= 10
        ace_count -= 1

    if player_value > 21:
        print("Player busts! Dealer wins!")

    else:

        while True:  
            
            dealer_value = sum(dealer_hand)
            ace_count = dealer_hand.count(11)
            
            while dealer_value > 21 and ace_count:
                
                dealer_value -= 10
                ace_count -= 1

            if dealer_value >= 17:
                break
            dealer_hand.append(random.choice([2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11]))

        dealer_value = sum(dealer_hand)
        ace_count = dealer_hand.count(11)
        
        while dealer_value > 21 and ace_count:
            dealer_value -= 10
            ace_count -= 1


        print(f"Player's final hand: {player_hand} with value {player_value}")
        print(f"Dealer's final hand: {dealer_hand} with value {dealer_value}")

        

        if player_value > 21:
            
            result = "Player busts! Dealer wins!"
            
        elif dealer_value > 21:
            
            result = "Dealer busts! Player wins!"
            
        elif player_value > dealer_value:
            
            result = "Player wins!"
            
        elif dealer_value > player_value:
            
            result = "Dealer wins!"
            
        else:
            result = "It's a tie!"


        print(result)


if __name__ == "__main__":
    while True:
        main()
        play_again = input("Do you want to play again? (y/n): ")
        if play_again != 'y':
            break
        os.system('cls' if os.name=='nt' else 'clear')