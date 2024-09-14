import java.sql.*;

public class Mahasiswa {
    private String nama;
    private int nim;
    private String jurusan;
    private String alamat;
    
    public Mahasiswa(String nama, int nim, String jurusan, String alamat) {
        this.nama = nama;
        this.nim = nim;
        this.jurusan = jurusan;
        this.alamat = alamat;
    }
    
    public void simpanData() {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mahasiswa", "root", "");
            String query = "INSERT INTO mahasiswa (nama, nim, jurusan, alamat) VALUES (?, ?, ?, ?)";
            PreparedStatement stmt = con.prepareStatement(query);
            stmt.setString(1, this.nama);
            stmt.setInt(2, this.nim);
            stmt.setString(3, this.jurusan);
            stmt.setString(4, this.alamat);
            stmt.executeUpdate();
            con.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}