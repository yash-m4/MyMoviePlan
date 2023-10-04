package com.myMoviePlan.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Seats {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", updatable = false, nullable = false)
	private int id;
	@Column
	private int movieId;
	@Column
	private int seat1;
	@Column
	private int seat2;
	@Column
	private int seat3;
	@Column
	private int seat4;
	@Column
	private int seat5;
	@Column
	private int seat6;
	@Column
	private int seat7;
	@Column
	private int seat8;
	@Column
	private int seat9;
	@Column
	private int seat10;
	@Column
	private int seat11;
	@Column
	private int seat12;
	@Column
	private int seat13;
	@Column
	private int seat14;
	@Column
	private int seat15;
	@Column
	private int seat16;
	@Column
	private int seat17;
	@Column
	private int seat18;
	@Column
	private int seat19;
	@Column
	private int seat20;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getMovieId() {
		return movieId;
	}
	public void setMovieId(int movieId) {
		this.movieId = movieId;
	}
	public int getSeat1() {
		return seat1;
	}
	public void setSeat1(int seat1) {
		this.seat1 = seat1;
	}
	public int getSeat2() {
		return seat2;
	}
	public void setSeat2(int seat2) {
		this.seat2 = seat2;
	}
	public int getSeat3() {
		return seat3;
	}
	public void setSeat3(int seat3) {
		this.seat3 = seat3;
	}
	public int getSeat4() {
		return seat4;
	}
	public void setSeat4(int seat4) {
		this.seat4 = seat4;
	}
	public int getSeat5() {
		return seat5;
	}
	public void setSeat5(int seat5) {
		this.seat5 = seat5;
	}
	public int getSeat6() {
		return seat6;
	}
	public void setSeat6(int seat6) {
		this.seat6 = seat6;
	}
	public int getSeat7() {
		return seat7;
	}
	public void setSeat7(int seat7) {
		this.seat7 = seat7;
	}
	public int getSeat8() {
		return seat8;
	}
	public void setSeat8(int seat8) {
		this.seat8 = seat8;
	}
	public int getSeat9() {
		return seat9;
	}
	public void setSeat9(int seat9) {
		this.seat9 = seat9;
	}
	public int getSeat10() {
		return seat10;
	}
	public void setSeat10(int seat10) {
		this.seat10 = seat10;
	}
	public int getSeat11() {
		return seat11;
	}
	public void setSeat11(int seat11) {
		this.seat11 = seat11;
	}
	public int getSeat12() {
		return seat12;
	}
	public void setSeat12(int seat12) {
		this.seat12 = seat12;
	}
	public int getSeat13() {
		return seat13;
	}
	public void setSeat13(int seat13) {
		this.seat13 = seat13;
	}
	public int getSeat14() {
		return seat14;
	}
	public void setSeat14(int seat14) {
		this.seat14 = seat14;
	}
	public int getSeat15() {
		return seat15;
	}
	public void setSeat15(int seat15) {
		this.seat15 = seat15;
	}
	public int getSeat16() {
		return seat16;
	}
	public void setSeat16(int seat16) {
		this.seat16 = seat16;
	}
	public int getSeat17() {
		return seat17;
	}
	public void setSeat17(int seat17) {
		this.seat17 = seat17;
	}
	public int getSeat18() {
		return seat18;
	}
	public void setSeat18(int seat18) {
		this.seat18 = seat18;
	}
	public int getSeat19() {
		return seat19;
	}
	public void setSeat19(int seat19) {
		this.seat19 = seat19;
	}
	public int getSeat20() {
		return seat20;
	}
	public void setSeat20(int seat20) {
		this.seat20 = seat20;
	}
	@Override
	public String toString() {
		return "Seats [id=" + id + ", movieId=" + movieId + ", seat1=" + seat1 + ", seat2=" + seat2 + ", seat3=" + seat3
				+ ", seat4=" + seat4 + ", seat5=" + seat5 + ", seat6=" + seat6 + ", seat7=" + seat7 + ", seat8=" + seat8
				+ ", seat9=" + seat9 + ", seat10=" + seat10 + ", seat11=" + seat11 + ", seat12=" + seat12 + ", seat13="
				+ seat13 + ", seat14=" + seat14 + ", seat15=" + seat15 + ", seat16=" + seat16 + ", seat17=" + seat17
				+ ", seat18=" + seat18 + ", seat19=" + seat19 + ", seat20=" + seat20 + "]";
	}
	
	
	
}
