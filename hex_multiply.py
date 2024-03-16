import random
def main():
    a = random.randrange(16)
    b = random.randrange(16)
    c = int(input(format(a,'x') + " ✕ " + format(b,'x') + " = "),base=16)
    if a*b == c:
        print("correct")
    else :
        print("wrong")
if __name__ == "__main__":
    main()
