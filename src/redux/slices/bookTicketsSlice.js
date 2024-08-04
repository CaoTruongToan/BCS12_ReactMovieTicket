import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  seatList: [
    // {
    //   hang: "",
    //   danhSachGhe: [
    //     { soGhe: "1", gia: 0 },
    //     { soGhe: "2", gia: 0 },
    //     { soGhe: "3", gia: 0 },
    //     { soGhe: "4", gia: 0 },
    //     { soGhe: "5", gia: 0 },
    //     { soGhe: "6", gia: 0 },
    //     { soGhe: "7", gia: 0 },
    //     { soGhe: "8", gia: 0 },
    //     { soGhe: "9", gia: 0 },
    //     { soGhe: "10", gia: 0 },
    //     { soGhe: "11", gia: 0 },
    //     { soGhe: "12", gia: 0 },
    //   ],
    // },
    {
      hang: "A",
      danhSachGhe: [
        { soGhe: "A1", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "A2", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "A3", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "A4", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "A5", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "A6", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "A7", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "A8", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "A9", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "A10", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "A11", gia: 0, daDat: true },
        { soGhe: "A12", gia: 0, daDat: true },
      ],
    },
    {
      hang: "B",
      danhSachGhe: [
        { soGhe: "B1", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "B2", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "B3", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "B4", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "B5", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "B6", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "B7", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "B8", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "B9", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "B10", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "B11", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "B12", gia: 75000, daDat: false, isSelected: false },
      ],
    },
    {
      hang: "C",
      danhSachGhe: [
        { soGhe: "C1", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "C2", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "C3", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "C4", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "C5", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "C6", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "C7", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "C8", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "C9", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "C10", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "C11", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "C12", gia: 75000, daDat: false, isSelected: false },
      ],
    },
    {
      hang: "D",
      danhSachGhe: [
        { soGhe: "D1", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "D2", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "D3", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "D4", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "D5", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "D6", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "D7", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "D8", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "D9", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "D10", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "D11", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "D12", gia: 75000, daDat: false, isSelected: false },
      ],
    },
    {
      hang: "E",
      danhSachGhe: [
        { soGhe: "E1", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "E2", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "E3", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "E4", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "E5", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "E6", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "E7", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "E8", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "E9", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "E10", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "E11", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "E12", gia: 75000, daDat: false, isSelected: false },
      ],
    },
    {
      hang: "F",
      danhSachGhe: [
        { soGhe: "F1", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "F2", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "F3", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "F4", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "F5", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "F6", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "F7", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "F8", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "F9", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "F10", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "F11", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "F12", gia: 75000, daDat: false, isSelected: false },
      ],
    },
    {
      hang: "G",
      danhSachGhe: [
        { soGhe: "G1", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "G2", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "G3", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "G4", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "G5", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "G6", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "G7", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "G8", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "G9", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "G10", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "G11", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "G12", gia: 75000, daDat: false, isSelected: false },
      ],
    },
    {
      hang: "H",
      danhSachGhe: [
        { soGhe: "H1", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "H2", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "H3", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "H4", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "H5", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "H6", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "H7", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "H8", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "H9", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "H10", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "H11", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "H12", gia: 75000, daDat: false, isSelected: false },
      ],
    },
    {
      hang: "I",
      danhSachGhe: [
        { soGhe: "I1", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "I2", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "I3", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "I4", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "I5", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "I6", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "I7", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "I8", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "I9", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "I10", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "I11", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "I12", gia: 75000, daDat: false, isSelected: false },
      ],
    },
    {
      hang: "J",
      danhSachGhe: [
        { soGhe: "J1", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "J2", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "J3", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "J4", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "J5", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "J6", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "J7", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "J8", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "J9", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "J10", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "J11", gia: 75000, daDat: false, isSelected: false },
        { soGhe: "J12", gia: 75000, daDat: false, isSelected: false },
      ],
    },
  ],
  selectedSeats: [],
}

const bookTicketsSlice = createSlice({
  name: "bookTickets",
  initialState,
  reducers: {
    toggleSeatSelection(state, action) {
      const { soGhe, hang } = action.payload
      const row = state.seatList.find((row) => row.hang === hang)
      const seat = row.danhSachGhe.find((seat) => seat.soGhe === soGhe)
      if (!seat.daDat && !seat.isSelected) {
        seat.isSelected = true
        state.selectedSeats.push({ soGhe, gia: seat.gia })
      } else if (seat.isSelected) {
        seat.isSelected = false
        state.selectedSeats = state.selectedSeats.filter(
          (s) => s.soGhe !== soGhe
        )
      }
    },
    cancelSeat(state, action) {
      const { soGhe } = action.payload
      state.selectedSeats = state.selectedSeats.filter((s) => s.soGhe !== soGhe)
      const row = state.seatList.find((row) =>
        row.danhSachGhe.some((seat) => seat.soGhe === soGhe)
      )
      const seat = row.danhSachGhe.find((seat) => seat.soGhe === soGhe)
      seat.isSelected = false
    },
    clearSelectedSeats(state) {
      state.selectedSeats.forEach(({ soGhe }) => {
        const row = state.seatList.find((row) =>
          row.danhSachGhe.some((seat) => seat.soGhe === soGhe)
        )
        const seat = row.danhSachGhe.find((seat) => seat.soGhe === soGhe)
        seat.isSelected = false
      })
      state.selectedSeats = []
    },
  },
})

export const { toggleSeatSelection, cancelSeat, clearSelectedSeats } = bookTicketsSlice.actions

export default bookTicketsSlice.reducer