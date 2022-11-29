import { StyleSheet, Text, View, SafeAreaView, Icon, TouchableOpacity, Animated, Modal } from 'react-native'
import React, { useState } from 'react'
import data from '../services/QuizData'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

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
        setShowNextButton(true)
        
        //show next btn
        
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
                {/* Questions Counter */}
                <View style={{flexDirection:'row', alignItems:'flex-end'}}>
                    <Text style={styles.textCurrQuestion}>{currQuestionIndex + 1}</Text>
                    <Text style={styles.textLengthQuestion}> / {allQuestions.length}</Text>
                </View>
        
                {/* Questions */}
                <Text style={styles.textAllQuestion}>{allQuestions[currQuestionIndex]?.question}</Text>

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
                            onPress={() => validateAns(option)}
                            disabled={isOptionDisables}
                            style={
                                {
                                    borderColor : option == correctOption
                                    ? '#00C851'
                                    : option == currOptionSelected
                                    ? '#ff4444'
                                    : '#1E90FF' + '40',
                                    backgroundColor: option == correctOption
                                    ? '#00C851' + '20'
                                    : option == currOptionSelected
                                    ? '#ff4444' + '20'
                                    : '#1E90FF' + '20',
                                    height : 60,
                                    flexDirection : 'row',
                                    alignItems : 'center',
                                    paddingHorizontal : 20,
                                    marginVertical : 10,
                                    borderWidth : 3,
                                    borderRadius : 16,
                                    justifyContent : 'space-between'
                                }
                            }
                            
                        >
                            <Text style={styles.textOptions}>{option}</Text>

                            {/* Show answer tru or false */}
                            {
                                option == correctOption ? (
                                    <View style={styles.answerCorerct}>
                                                    <MaterialCommunityIcons name='check' style={styles.icons}></MaterialCommunityIcons>
                                    </View>
                                ) : option == currOptionSelected ? (
                                    <View style={styles.answerWrong}>
                                    <MaterialCommunityIcons name='close' style={styles.icons} />
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
                    style={styles.nextBtn}
                >
                    <Text style={styles.textNext}>
                        Next {'>'} 
                    </Text>
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
            <View style={styles.progressBar}>
                <Animated.View style={[styles.animatedProgress,{
                    width : progressAnim
                }]}>

                </Animated.View>
            </View>
        )
    }

  return (
    <SafeAreaView style={{flex : 1}}>
        <View style={styles.container}>

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
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text style={{fontSize: 30, fontWeight: 'bold'}}>{score > (allQuestions.length/2) ? 'Congrats!' : 'Oops!'}</Text>

                        <View style={styles.modalQuestions}>
                            <Text style={{fontSize : 30, color: score >(allQuestions.length/2) ? '#00C851' : '#ff4444'}}>{score}</Text>
                            <Text style={styles.textNext}> / { allQuestions.length }</Text>
                        </View>

                        {/* Retry quiz Button */}
                        <TouchableOpacity onPress={restartQuiz} style={styles.retryContainer}>
                            <Text style={styles.textRetry}>Retry Quiz</Text>
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
        paddingVertical: 20,
        marginHorizontal: 10,
    },
    textOptions : {
        fontSize : 20,
        color : 'black',
        display : 'flex',
        justifyContent  : 'space-between'
    },
    textCurrQuestion : {
        color : 'grey',
        fontSize : 20,
        opacity: 0.6,
        marginRight: 2
    },
    textLengthQuestion : {
        color: 'grey',
        fontSize : 18,
        opacity: 0.6
    },
    textAllQuestion: {
        color : 'black',
        fontSize: 30
    },
    answerCorerct : {
        width : 30,
        height : 30,
        borderRadius : 20,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#00C851',
        marginLeft : 5,
    },
    answerWrong : {
        width : 30, 
        height : 30, 
        borderRadius : 20,
        justifyContent : 'center', 
        alignItems : 'center',
        backgroundColor : '#ff4444', 
        marginLeft : 5
    },
    icons : {
        color : 'white',
        fontSize : 20,
        
    },
    nextBtn : {
        marginTop : 20, 
        width : '100%', 
        padding : 20, 
        borderRadius : 5, 
        display : 'flex', 
        flexDirection : 'row', 
        justifyContent : 'flex-end', 
        alignItems : 'center'
    },
    textNext : {
        fontSize: 20, color: 'black'
    }, 
    progressBar : {
        width : '100%', 
        height: 20, 
        borderRadius : 20, 
        backgroundColor : '#00000020'
    },
    animatedProgress : {
        height : 20,
        borderRadius : 20,
        backgroundColor : '#3498db'
    },
    modalContainer : {
        flex : 1,
        backgroundColor : '#1E90FF',
        alignItems : 'center',
        justifyContent : 'center'
    },
    modalView : {
        backgroundColor : 'white',
        width : '90%',
        borderRadius : 20,
        padding : 20,
        alignItems : 'center'
    },
    modalQuestions : {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 20
    },
    retryContainer : {
        padding: 20,
        width: '100%',
        borderRadius: 20,
        backgroundColor : '#3498db'
    },
    textRetry : {
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    }
})