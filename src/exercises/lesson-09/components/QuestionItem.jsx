import { useContext, useState } from 'react';
import { SurveyContext } from '../SurveyContext';
import { QUESTION_TYPES } from '../surveyReducer';
import styles from '../StudentWork.module.css';

export function QuestionItem({ question }) {
  const [workingText, setWorkingText] = useState(question.question);
  const { state, dispatch } = useContext(SurveyContext);

  const isEditing = state.ui.editingQuestionId === question.id;

  const formatQuestionType = (type) => {
    return type
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
  };

  const handleEdit = () => {
    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: {
        questionId: isEditing ? null : question.id,
      },
    });
  };

  const handleSave = () => {
    dispatch({
      type: 'UPDATE_QUESTION_TEXT',
      payload: {
        id: question.id,
        newText: workingText,
      },
    });

    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: { questionId: null },
    });
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this question?'
    );

    if (confirmDelete) {
      dispatch({
        type: 'DELETE_QUESTION',
        payload: { id: question.id },
      });
    }
  };

  const handleOptionSave = (index, newText) => {
    dispatch({
      type: 'UPDATE_OPTION_TEXT',
      payload: {
        questionId: question.id,
        optionIndex: index,
        newText,
      },
    });
  };

  const handleOptionDelete = (index) => {
    dispatch({
      type: 'DELETE_OPTION_FROM_QUESTION',
      payload: {
        questionId: question.id,
        optionIndex: index,
      },
    });
  };

  const handleAddOption = () => {
    const text = prompt('Enter new option:');
    if (!text) return;

    dispatch({
      type: 'ADD_OPTION_TO_QUESTION',
      payload: {
        questionId: question.id,
        optionText: text,
      },
    });
  };

  return (
    <div className={styles['question-item']}>
      <div className={styles['question-header']}>
        <span className={styles['question-type']}>
          Question Type: {formatQuestionType(question.type)}
        </span>

        <div className={styles['question-actions']}>
          <button className={styles['edit-btn']} onClick={handleEdit}>
            {isEditing ? 'Cancel' : 'Edit'}
          </button>

          <button className={styles['delete-btn']} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>

      <div className={styles['question-content']}>
        {isEditing ? (
          <>
            <input
              value={workingText}
              onChange={(e) => setWorkingText(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
          </>
        ) : (
          <h3>{question.question}</h3>
        )}
      </div>

      {question.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
        <div className={styles['options-section']}>
          <h4>Answer Options:</h4>

          <ul>
            {question.options.map((option, index) => {
              const canDelete = question.options.length > 2;

              return (
                <li key={index} className={styles['option-item']}>
                  <input
                    value={option}
                    onChange={(e) => handleOptionSave(index, e.target.value)}
                  />

                  <button
                    onClick={() => handleOptionDelete(index)}
                    disabled={!canDelete}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>

          <button onClick={handleAddOption}>+ Add Option</button>
        </div>
      )}
    </div>
  );
}
