nome = str(input("Digite o nome de seu persongaem:"))
nome_jogador = str(input("Digite seu nome: "))
classe = str(input(" Qual sua classe? "))
raca = str(input("Qual sua raça?"))
origem = str(input("Qual sua origem? "))
idade = str(input("Digite a idade do seu personagem: "))
deslocamento = float(input("Digite o deslocamento do seu personagem(em metros):"))
nivel = int(input("Qual no nível do seu personagem? "))

criar_info_persognagem(nome, nome_jogador, classe, raca, origem, idade, deslocamento, nivel)
def criar_info_persognagem(nome, nome_jogador, classe, raca, origem, idade, deslocamento, nivel,):
    personagem = {"nome": nome, "jogador": nome_jogador, "classe":classe,"raca":raca,"origem":origem,"idade":idade,"deslocamento":deslocamento,"nivel":nivel}
    return personagem

def mudar_nivel():
    return 