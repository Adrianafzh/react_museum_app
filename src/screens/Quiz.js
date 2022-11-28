import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Animated, Modal } from 'react-native'
import React, { useState } from 'react'
import data from '../services/QuizData'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export function Quiz() {

    const allQuestions = data
    const [currQuestionIndex, setCurrQuestionIndex] = useState(0)
    const [currOptionSelected, setcurrOptionSelected] = useState(null)
    const [correctOption, setCorrectOption] = useState(null)
    const [isOptionDisables, setIsOptionDisables] = useState(false)
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)

    const validateAns = (selectedoption) => {
        let correct_option = allQuestions[currQuestionIndex]['correct_option']
        setcurrOptionSelected(selectedoption)
        setCorrectOption(correct_option)
        setIsOptionDisables(true)

        //setscore
        if(selectedoption == correct_option){
            setScore(score + 1)
        }

        //show next btn
        setShowNextButton(true)
    }

    const handleNext = () => {
        if (currQuestionIndex == allQuestions.length - 1){
            setShowScoreModal(true)
        } else {
            setCurrQuestionIndex(currQuestionIndex + 1)
            setcurrOptionSelected(null)
            setCorrectOption(null)
            setIsOptionDisables(false)
            setShowNextButton(false)
        }
        Animated.timing(progress, {
            toValue : currQuestionIndex + 1,
            duration : 1000,
            useNativeDriver : false
        }).start();
    }

    const restartQuiz = () => {
        setShowScoreModal(false)

        setCurrQuestionIndex(0)
        setScore(0)

        setcurrOptionSelected(null)
        setCorrectOption(null)
        setIsOptionDisables(false)
        setShowNextButton(false)
        Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }


    const renderQuestions = () => {
        return (
            <View style={{
                marginVertical: 40
            }}>
                <View style={{flexDirection:'row', alignItems:'flex-end'}}>
                    <Text>{currQuestionIndex + 1}</Text>
                    <Text>{allQuestions.length}</Text>
                </View>
        
                {/* Questions */}
                <Text>{allQuestions[currQuestionIndex]?.question}</Text>

            </View>
        )
    }

    const renderOptions = () => {
        return(
            <View>
                {
                    allQuestions[currQuestionIndex]?.options.map(option => (
                        <TouchableOpacity
                            key={option}
                            style={styles.options}
                            onPress={() => validateAns(option)}
                        >
                            <Text>{option}</Text>

                            {/* Show answer tru or false */}
                            {
                                option == correctOption ? (
                                    <View style={{width : 30, height : 30, borderRadius : 10, justifyContent : 'center', alignItems : 'center', backgroundColor : 'green'}}>
                                        {/* <MaterialCommunityIcons name='check' style={{fontSize : 20, color : 'white'}} /> */}
                                    </View>
                                ) : option == currOptionSelected ? (
                                    <View style={{width : 30, height : 30, borderRadius : 10, justifyContent : 'center', alignItems : 'center', backgroundColor : 'red'}}>
                                    {/* <MaterialCommunityIcons name='close' style={{fontSize : 20, color : 'white'}} /> */}
                                    </View>  
                                ) : null
                            }

                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }

    const renderNextButton = () => {
        if (showNextButton) {
            return (
                <TouchableOpacity
                onPress={handleNext}
                    style={{marginTop : 20, width : '100%', padding : 20, borderRadius : 5}}
                >
                    <Text>Next</Text>
                </TouchableOpacity>
            )
        } else {
            return null
        }
    }

    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ['0%','100%']
    })

    const renderProgressBar = () => {
        return (
            <View>
                <Animated.View style={[{
                    height : 20,
                     borderRadius : 20,
                     backgroundColor : 'blue'
                },{
                    width : progressAnim
                }]}>

                </Animated.View>
            </View>
        )
    }

  return (
    <SafeAreaView>
        <View style={styles.container}>
            <Text>Quiz</Text>

            {/* Progress Bar */}
            {renderProgressBar()}

            {/* Questions */}
            {renderQuestions()}

            {/* Options */}
            {renderOptions()}

            {/* Next Button */}
            {renderNextButton()}

            {/* Score Modal */}
            <Modal
            animationType='slide'
            transparent= {true}
            visible = {showScoreModal}
            >
                <View style={{
                    flex : 1,
                    backgroundColor : 'blue',
                    alignItems : 'center',
                    justifyContent : 'center'
                }}>
                    <View style={{
                        backgroundColor : 'white',
                        width : '90%',
                        borderRadius : 20,
                        padding : 20,
                        alignItems : 'center'
                    }}>
                        <Text>{score > (allQuestions.length/2) ? 'Congrats!' : 'Oops!'}</Text>

                        <View style={{
                               flexDirection: 'row',
                               justifyContent: 'flex-start',
                               alignItems: 'center',
                               marginVertical: 20
                           }}>
                            <Text>{score}</Text>
                            <Text>{ allQuestions.length }</Text>
                        </View>

                        {/* Retry quiz Button */}
                        <TouchableOpacity onPress={restartQuiz} style={{
                            padding: 20, width: '100%', borderRadius: 20, backgroundColor : 'blue'
                        }}>
                            <Text>Retry Quiz</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </Modal>

        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container : {
    },
    options : {
        height : 60,
        flexDirection : 'row',
        alignItems : 'center',
        paddingHorizontal : 10,
        marginVertical : 10

    }
})