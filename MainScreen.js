import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import ScoreHeader from "./components/ScoreHeader";

const questionsData = [
    {
        id: 1,
        question: 'What is the capital of France?',
        imageUrl: 'https://as1.ftcdn.net/v2/jpg/01/90/50/22/1000_F_190502221_fekXxniJ8Fro4Jnf2iARcwhYm9vfNyet.jpg',
        choices: ['Berlin', 'Paris', 'Madrid', 'Rome'],
        correctAnswer: 'Paris',
    },
    {
        id: 2,
        question: 'Which planet is known as the Red Planet?',
        imageUrl: 'https://as2.ftcdn.net/v2/jpg/03/66/81/05/1000_F_366810558_oHtNhQLAHEfLXyV4RYe2X1VgwcUQYfdC.jpg',
        choices: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars',
    },
    // Add more questions as needed
];

export default function MainScreen() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const handleRestart = () => {
        // Add logic to reset the quiz state
        setCurrentQuestionIndex(0);
        setScore(0);
    };

    const handleChoicePress = (choice) => {
        setSelectedAnswer(choice);
    };

    const handleNextQuestion = () => {
        // Check the answer and update score if needed
        // This is where you can add scoring logic or any other actions based on the answer

        // Move to the next question
        setSelectedAnswer(null);
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    };

    return (
        <View style={styles.container}>
            <ScoreHeader score={currentQuestionIndex} totalQuestions={questionsData.length} onRestart={handleRestart} />
            {currentQuestionIndex < questionsData.length && (
                <View style={styles.questionContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={{ width: 300, height: 300 }}
                            source={{ uri: questionsData[currentQuestionIndex].imageUrl }}
                            onError={(error) => console.error('Image error:', error)}
                        />
                    </View>
                    <Text style={styles.questionText}>{questionsData[currentQuestionIndex].question}</Text>
                    {questionsData[currentQuestionIndex].choices.map((choice) => (
                        <TouchableOpacity
                            key={choice}
                            style={[
                                styles.choiceButton,
                                selectedAnswer === choice && styles.selectedChoice,
                            ]}
                            onPress={() => handleChoicePress(choice)}
                            disabled={selectedAnswer !== null}
                        >
                            <Text style={styles.choiceLabel}>{choice}</Text>
                        </TouchableOpacity>
                    ))}
                    {selectedAnswer !== null && (
                        <View>
                            <Text style={styles.answerStatus}>
                                {selectedAnswer === questionsData[currentQuestionIndex].correctAnswer
                                    ? 'Correct!'
                                    : 'Incorrect!'}
                            </Text>
                            <TouchableOpacity style={styles.nextButton} onPress={handleNextQuestion}>
                                <Text style={styles.nextButtonText}>Next Question</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },
    questionImage: {
        width: '100%',
        height: 200, // Adjust the height based on your design
        resizeMode: 'cover',
        borderRadius: 10,
    },
    imageContainer: {
        borderWidth: 2, // Add styling to the image container if needed
        borderRadius: 10, // Optional: Add border radius for a rounded appearance
        overflow: 'hidden', // Ensure the image stays within the container
    },
    questionContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    questionText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
    },
    question: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    choiceButton: {
        backgroundColor: '#e0e0e0',
        padding: 10,
        margin: 5,
        borderRadius: 8,
    },
    selectedChoice: {
        backgroundColor: '#4caf50',
    },
    choiceLabel: {
        fontSize: 16,
        color: '#333',
    },
    answerStatus: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    nextButton: {
        marginTop: 10,
        backgroundColor: '#2196f3',
        padding: 10,
        borderRadius: 8,
    },
    nextButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
