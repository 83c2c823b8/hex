#! /usr/bin/env python3
import random,sys
def main():
    try:
        a = random.randrange(16)
        b = random.randrange(16)
        c = int(input(format(a,'x') + " ✕ " + format(b,'x') + " = "),base=16)
        if a*b == c:
            print("correct")
        else :
            print("wrong")
    except ValueError:
        print("invalid value")
    except KeyboardInterrupt:
        print("\n goodbye")
        sys.exit()
if __name__ == "__main__":
    while True:
        main()
