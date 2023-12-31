```mermaid
sequenceDiagram
    Programme->>Voiture: Créer nouvelles voitures [couleur, etat]
    Voiture->>Programme: nouvelles instances
    Programme->>Programme: créer tableau voitures
    Programme->>+Conducteur: Créer [nom, prenom, voitures]
    Conducteur->>+Programme: nouvelle instance
    Conducteur->>Voiture: reçoit voitures
    Voiture->>Conducteur: voitures attribuees au conducteur
    Programme->>+Conducteur: dis bonjour
    Conducteur->>+Programme: log bonjour nom + prénom
    Programme->>Conducteur: crasher voiture n°
    Conducteur->>Voiture: crasher voiture n°
    Voiture->>Voiture: etat -20%
    Programme->>Conducteur: log état voiture crashée
```

## Joueur

```mermaid
sequenceDiagram
    Programme->>+Joueur: Créer [Kevin, Durant, 37]
    Joueur->>-Programme: Nouvelle instance Joueur
    Programme->>+Joueur: Créer [Victor, Wembi, 19]
    Joueur->>-Programme: Nouvelle instance Joueur
    Programme->>+Equipe: Créer [J1, J2]
    Equipe->>-Programme: Nouvelle instance Equipe
    Programme->>+Equipe: Afficher le nombre de joueurs
    Equipe->>+Programme: nb Joueurs = 2
 ```
```mermaid
 classDiagram
    class Joueur{
      +String prenom
      +String nom
      +Int age      
    }
    class Equipe{
        +Joueur[] joueurs
        afficher nombre de joueurs()
    }
    class Match{
        +Equipe [] equipe1
        +Equipe [] equipe2
        afficher score du match()
    }
    class Tournoi{
        +Equipe equipe1
        +Equipe equipe2
        +Equipe equipe3
        +Equipe equipe4
        afficher vainqueur match equipe1etequipe2()
        afficher vainqueur match equipe3etequipe4()
        afficher vainqueur finale tournoi()
        afficher vainqueur petite finale tournoi ()
    
    }       
 ```
 ### Viking

 ```mermaid
 classDiagram
     class Viking{
     +String nom
     +Int sante
     +Int force
     +Sting arme
    }   
     class Arme{
     +String nom
     +Int force
    }
     class Combat{
     +Viking [] 2 vikings
     afficher vainqueur du combat ()
    }

  ```   