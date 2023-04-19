<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="haber_sitesi.admin.Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Admin Giris</title>
    <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>
    <script src="../vendor/jquery/jquery.min.js"></script>
    <script src="../vendor/jquery/jquery.slim.min.js"></script>
</head>
<body>
    <style>
      

    </style>

    <form id="form1" runat="server">
        <div>

            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="alert alert-primary text-center mt-3" role="alert">
                            Admin Giris Sayfasi
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <form>
                            <div class="form-group align-baseline nav-fill">
                                <label for="inputEmail3">Kullanici Adi</label>
                                <asp:TextBox ID="TxtKad" runat="server" CssClass="form-control" placeholder="Kullanici adi"></asp:TextBox>
                            </div>

                            <div class="form-group">
                                <label for="inputPassword3">Sifre</label>
                                <asp:TextBox ID="TxtSifre" runat="server" CssClass="form-control" placeholder="Sifre"></asp:TextBox>
                            </div>
                            
                            <asp:Button ID="BtnGiris" runat="server" Text="Giris" CssClass="btn btn-primary" OnClick="BtnGiris_Click" />
                            &nbsp;&nbsp;<asp:Label ID="Label1" runat="server" Text=""></asp:Label>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    </form>
</body>
</html>
