import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ScoreHeader = ({ score, totalQuestions, onRestart }) => {
    return (
        <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>Score: {score}</Text>
            <Text style={styles.totalQuestionsText}>Question {score + 1}/{totalQuestions}</Text>
            <TouchableOpacity onPress={onRestart}>
                <Text style={styles.restartButton}>Restart</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', // Align items at the top
    },
    scoreContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#2196f3',
        width: '100%',
        position: 'absolute', // Position absolute for top alignment
        top: 0, // Set top to 0 to align at the top
    },
    scoreText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    totalQuestionsText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    restartButton: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ScoreHeader;
