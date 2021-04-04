import React from 'react';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';

const EntryContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-flow: row wrap;
	// height: 92px;
	align-items: center;
	border-bottom: 1px solid #b0b8bc;
	margin: 10px auto;
	padding: 0 16px;
	color: #111b47;
	font-size: 1.2rem;
`;

const RowSection = styled.div`
	// height: 56px;
	padding: 0;
	margin: 0;

	&.title-section {
		width: 27%;
		font-weight: 700;
	}
	&.body-section {
		width: 51%;
	}
	&.date-section {
		width: 13%;
	}
	&.icon-section {
		width: 3%;
	}
`;

const RowSectionP = styled.p`
	margin: 0 auto;
	padding: 8px 0;
`;

const Trash = styled.button`
	background-color: #fff;
	color: #222f65;
	border: none;
	width: 36px;
	height: 36px;
	cursor: pointer;
	outline: none;
`;

const EntryRow = (props) => {
	return (
		<EntryContainer>
			<RowSection className='title-section'>
				<Link to={`/logs/${props.index}`}>
					<RowSectionP>{props.title}...</RowSectionP>
				</Link>
			</RowSection>
			<RowSection className='body-section'>
				<RowSectionP>{props.content}...</RowSectionP>
			</RowSection>
			<RowSection className='date-section'>
				<RowSectionP>{props.date}</RowSectionP>
			</RowSection>

			{/* <Trash onClick={handleDelete}>
				<DeleteIcon />
			</Trash> */}
		</EntryContainer>
	);
};

export default EntryRow;

/**
 * <EntryContainer>
			<RowSection className='title-section'>
				<Link to='/logs/:id'>
					<RowSectionP>{props.title}</RowSectionP>
				</Link>
			</RowSection>
			<RowSection className='body-section'>
				<RowSectionP>{`${props.content.substring(0, 40)} ...`}</RowSectionP>
			</RowSection>
			<RowSection className='date-section'>
				<RowSectionP>{props.date}</RowSectionP>
			</RowSection>
			<RowSection className='icon-section'>
				<Trash onClick={props.onClick}>
					<DeleteIcon />
				</Trash>
			</RowSection>
		</EntryContainer>
 * 
 * 
 */

// <EntryContainer>
// 	<RowSection className='title-section'>
// 		<Link to='/logs/:id'>
// 			<RowSectionP>Day 1</RowSectionP>
// 		</Link>
// 	</RowSection>
// 	<RowSection className='body-section'>
// 		<RowSectionP>{concatBody()}</RowSectionP>
// 	</RowSection>
// 	<RowSection className='date-section'>
// 		<RowSectionP>10:20 AM, March 12, 2021</RowSectionP>
// 	</RowSection>
// 	<RowSection className='icon-section'>
// 		<Trash onClick={handleClick}>
// 			<DeleteIcon />
// 		</Trash>
// 	</RowSection>
// </EntryContainer>;
/*
 * <EntryContainer>
	<RowSection className='title-section'>
		<Link to='/logs/:id'>
			<RowSectionP>{entries.title}</RowSectionP>
		</Link>
	</RowSection>
	<RowSection className='body-section'>
		<RowSectionP>{`${entries.content.substring(0, 40)} ...`}</RowSectionP>
	</RowSection>
	<RowSection className='date-section'>
		<RowSectionP>{entries.date}</RowSectionP>
	</RowSection>
	<RowSection className='icon-section'>
		<Trash onClick={handleClick}>
			<DeleteIcon />
		</Trash>
	</RowSection>
</EntryContainer>
 * 
 */