<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="kategoriduzenle.aspx.cs" Inherits="haber_sitesi.admin.kategoriduzenle" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Kategori Duzenleme</title>
    <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    <script src="../vendor/jquery/jquery.min.js"></script>
    <script src="../vendor/jquery/jquery.slim.min.js"></script>
    <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <table>
                <tr>
                    <td>Kategori Adi:</td>
                    <td>
                        <asp:TextBox ID="TxtKekle" runat="server" CssClass="form-control"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <asp:Button ID="BtnKekle" runat="server" Text="Duzenle" CssClass="btn btn-primary" OnClick="BtnKekle_Click"/>
                    </td>
                </tr>
            </table>
        </div>
    </form>
</body>
</html>
