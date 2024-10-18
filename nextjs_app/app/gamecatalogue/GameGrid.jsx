import GameCard from './GameCard'
import styles from '../styles/GameGrid.module.css'

const gameData = [
  {
    title: "Runway",
    description: "Learn to balance your budget and your environmental impact",
    features: ["Fast Fashion", "Budgeting", "Decision-Making"],
    buttonText: "MINI GAME",
    type: "miniGame",
    image: "images/TeachIcon.svg" // Update with actual image path
  },
  {
    title: "RecycleMe",
    description: "Learn to recycle in a competitive 'Overcooked' style game",
    features: ["Recycling Literacy", "Materials Identification"],
    buttonText: "MINI GAME",
    type: "miniGame",
    image: "/images/VectorRecycleIcon.svg" // Update with actual image path
  },
  {
    title: "Supermarket Scramble",
    description: "Learn to budget, empathise and prioritise in a real-world scenario",
    features: ["Financial Literacy", "Social Inequality", "Budgeting"],
    buttonText: "MINI GAME",
    type: "miniGame",
    image: "/images/TeachIcon.svg" // Update with actual image path
  },
  {
    title: "Balance the Bistro",
    description: "Learn to be aware of the biases and issues that lead to food waste",
    features: ["Food Waste", "Educated Judgements", "Contextual Clueing"],
    buttonText: "MINI GAME",
    type: "miniGame",
    image: "/images/TeachIcon.svg" // Update with actual image path
  },
  {
    title: "Environment & Sustainability World",
    description: "Learn how your everyday actions impact our world and learn sustainable living practices!",
    features: ["Fast Fashion", "Budgeting", "Decision-Making"],
    buttonText: "WHOLE MODULE",
    type: "wholeModule",
    image: "/images/environment.jpg" // Update with actual image path
  },
  {
    title: "Social Inequality World",
    description: "Learn about social inequality through the lens of someone from a low income background",
    features: ["Decision-Making", "Opportunity Cost", "Conflict Resolution"],
    buttonText: "WHOLE MODULE",
    type: "wholeModule",
    image: "/images/inequality.jpg" // Update with actual image path
  }
]

const GameGrid = () => {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <div className={styles.grid}>
          {gameData.map((game, index) => (
            <GameCard
              key={index}
              title={game.title}
              description={game.description}
              features={game.features}
              buttonText={game.buttonText}
              type={game.type}
              image={game.image}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default GameGrid
